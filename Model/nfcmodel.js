import AuthorSchema from '../schema/AuthorSchema'
import NfcSchema from '../schema/nfcSchema'
import OwnerSchema from '../schema/OwnerSchema'
import KycSchema from '../schema/kycschema'
import KybSchema from '../schema/KybSchema'
import users from '../Schema/Users'
class NfcModel {
    PostNfc = (req) => {
        return new Promise((resolve, reject) => {
            KycSchema.find({ User: req.query.userId })
                .then((res) => {

                    if (res[0].Verified == true) {
                        const data = new NfcSchema(req.body)
                        data.save()
                            .then((res) => {
                                return resolve({
                                    status: 200,
                                    message: res,
                                });
                            })
                            .catch((e) => {
                                return reject({
                                    status: 503,
                                    message: e,
                                });
                            })
                    }
                    else {
                        return resolve({
                            status: 503,
                            message: "KYC form is not verified",
                        });
                    }
                })
                .catch((e) => {
                    return resolve({
                        status: 503,
                        message: "KYC form is not verified",
                    });
                })

        })
    }
    GetsingleNfc = (req) => {
        return new Promise((resolve, reject) => {
            return NfcSchema.findOne({ _id: req.query.id }).populate('User').populate('Author').populate('Owner')
                .then((res) => {
                    return resolve({
                        status: 200,
                        message: res,
                    });
                })
                .catch((e) => {
                    return reject({
                        status: 503,
                        message: e,
                    });
                })
        })
    }
    GetNfc = (req) => {
        return new Promise((resolve, reject) => {
            return NfcSchema.find({ User: req.query.userId }).populate('User').populate('Author').populate('Owner')
                .then((res) => {
                    console.log(res)
                    return resolve({
                        status: 200,
                        message: res,
                    });
                })
                .catch((e) => {
                    console.log(e)
                    return reject({
                        status: 503,
                        message: e,
                    });
                })
        })
    }
    CreateAuthor = (req) => {
        return new Promise((resolve, reject) => {
            const data = new AuthorSchema(req.body)
            data.save()
                .then((res) => {
                    return resolve({
                        status: 200,
                        message: res,
                    });
                })
                .catch((e) => {
                    return reject({
                        status: 503,
                        message: e,
                    });
                })
        })
    }
    CreateOwner = (req) => {
        return new Promise((resolve, reject) => {
            const data = new OwnerSchema(req.body)
            data.save()
                .then((res) => {
                    return resolve({
                        status: 200,
                        message: res,
                    });
                })
                .catch((e) => {
                    return reject({
                        status: 503,
                        message: e,
                    });
                })
        })
    }
    // CreateCreator = (req) => {
    //     return new Promise((resolve, reject) => {
    //         const data = new CreatorSchema(req.body)
    //         data.save()
    //             .then((res) => {
    //                 return resolve({
    //                     status: 200,
    //                     message: res,
    //                 });
    //             })
    //             .catch((e) => {
    //                 return reject({
    //                     status: 503,
    //                     message: e,
    //                 });
    //             })
    //     })
    // }
    PostKyc = (req) => {
        return new Promise((resolve, reject) => {
            users.find({ _id: req.query.userId })
                .then((res) => {
                    if (res[0].kyc == false) {
                        const data = new KycSchema(req.body)
                        data.save()
                            .then((res) => {
                                if (res) {
                                    users.findOneAndUpdate(
                                        { _id: req.body.User },
                                        { kyc: true },
                                        function (err, success) {
                                            if (err) {
                                                console.log(err);
                                            } else if (success) {
                                                console.log(success);
                                            }
                                        }
                                    )
                                }
                                return resolve({
                                    status: 200,
                                    message: res,
                                });
                            })
                            .catch((e) => {
                                console.log(e)
                                return reject({
                                    status: 503,
                                    message: e,
                                });
                            })
                    }
                    else {
                        return reject({
                            status: 503,
                            message: 'Kyc form is fill only one time',
                        });
                    }
                })

        })
    }
    PostKyb = (req) => {
        return new Promise((resolve, reject) => {
            users.find({ _id: req.query.userId })
                .then((res) => {
                    if (res.kyc == false) {
                        const data = new KybSchema(req.body)
                        data.save()
                            .then((res) => {
                                return resolve({
                                    status: 200,
                                    message: res,
                                });
                            })
                            .catch((e) => {
                                console.log(e)
                                return reject({
                                    status: 503,
                                    message: e,
                                });
                            })
                    }
                    else {
                        return reject({
                            status: 503,
                            message: 'Kyc form is fill only one time',
                        });
                    }
                })
        })
    }
    Verifyform = (req) => {
        return new Promise((resolve, reject) => {
            if (req.body.type == 'kyc') {
                KycSchema.findOneAndUpdate({ _id: req.query.id }, { Verified: true })
                    .then((res) => {
                        return resolve({
                            status: 200,
                            message: res,
                        })
                    })
                    .catch((e) => {
                        return reject({
                            status: 503,
                            message: e,
                        });
                    })
            }
            else {
                KybSchema.findOneAndUpdate({ _id: req.query.id }, { Verified: true })
                    .then((res) => {
                        return resolve({
                            status: 200,
                            message: res,
                        })
                    })
                    .catch((e) => {
                        return reject({
                            status: 503,
                            message: e,
                        });
                    })
            }

        })
    }
}
export default new NfcModel();