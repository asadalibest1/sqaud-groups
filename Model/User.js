import users from '../Schema/Users';
// import jwt from 'jsonwebtoken';
// import validateEmail from '../utils/validateEmail';
// import matchPassword, { generateToken, HashingPassword } from '../utils/matchPasswod';
// import Mail, { generateOtp, sendMail } from '../utils/mail';
import * as scrapman from 'scrapman';
import jsdom from 'jsdom';
const { JSDOM } = jsdom;


class UsersModel {


    groupInvitation = (req, res) => {

        const { link } = req.body;


        console.log(link);
        return new Promise((resolve, reject) => {

            try {
                scrapman.load(link, function (results) {
                    console.log(results);
                    resolve({
                        success: true,
                        code: 200,

                        msg: "data has been fetched successful!"
                    });


                });
            } catch (error) {
                reject({
                    success: false,
                    code: 403,
                    error,
                });
            }
        });

    };





    // proceedWithEmailPassword = async (req, body, resolve, reject) => {

    //     const { email, password } = body;


    //     try {


    //         const match = await users.findOne({ email });

    //         if (match) return reject({ param: 'email', message: 'email already taken!' })


    //         const HashedPassword = HashingPassword(password);

    //         const data = new users({
    //             ...req.body,
    //             password: HashedPassword
    //         });

    //         const res = await data.save();
    //         console.log('res', res);

    //         const token = jwt.sign({
    //             _id: res._id.toString(),
    //             address: res.address
    //         }, process.env.JWT_SECRET, { expiresIn: '6h' });
    //         return resolve({
    //             code: 200,
    //             success: true,
    //             token: `Bearer ${token}`,
    //             user: res,
    //             msg: "Your account has been created and you are now logged in."
    //         });



    //     } catch (error) {
    //         console.log('error', error);
    //         return reject(error)
    //     }
    // }


    // updateProfile = async (req, res) => {
    //     const { userId } = req.query;
    //     return new Promise(async (resolve, reject) => {



    //         const match = await users.findById(userId);

    //         if (!match) return reject({ param: 'userId', message: 'Account does not found in the database' })

    //         try {
    //             const data = await users.findByIdAndUpdate(userId, req.body);

    //             return resolve({
    //                 code: 200,
    //                 success: true,
    //                 user: { email: data.email, type: data.type, id: data._id },
    //                 msg: "User has been updated!"
    //             });



    //         } catch (error) {
    //             console.log('error', error);
    //             return reject(error)
    //         }
    //     })
    // }

    // getProfile = async (req, res) => {

    //     const { userId } = req.query;
    //     return new Promise(async (resolve, reject) => {


    //         try {
    //             const user = await users.findById(userId);
    //             if (!user) return reject({ param: 'userId', message: 'Account does not found in the database' })


    //             return resolve({
    //                 code: 200,
    //                 success: true,
    //                 user: user,
    //                 msg: "User data has been found!"
    //             });
    //         } catch (error) {
    //             console.log('error', error);
    //         }
    //     })
    // }

    // loginWithGmail = async (req, res) => {

    //     const { email, gmail_id, type } = req.body;

    //     return new Promise(async (resolve, reject) => {
    //         try {


    //             const user = await validateEmail(email);

    //             if (user) {
    //                 if (user.type === type) {

    //                     if (matchPassword(gmail_id, user.password)) {

    //                         return resolve({
    //                             code: 200,
    //                             success: true,
    //                             token: `Bearer ${generateToken(user._id.toString())}`,
    //                             user: { email: user.email, type: user.type, id: user._id },
    //                             msg: "You are now logged in."
    //                         });

    //                     }
    //                 } else {
    //                     return reject({ param: 'email', message: 'email already taken!' })
    //                 }

    //             } else {
    //                 const HashedPassword = HashingPassword(gmail_id);

    //                 const data = new users({
    //                     ...req.body,
    //                     password: HashedPassword
    //                 });

    //                 const res1 = await data.save();
    //                 console.log('res', res1);

    //                 return resolve({
    //                     code: 200,
    //                     success: true,
    //                     token: `Bearer ${generateToken(res1._id.toString())}`,
    //                     user: res1,
    //                     msg: "Your account has been created and you are now logged in."
    //                 });
    //             }

    //         } catch (error) {
    //             console.log('error', error);
    //             return reject(error)
    //         }
    //     })
    // }



    // verifyMetamask = (req, res) => {
    //     const { address } = req.body;

    //     return new Promise(async (resolve, reject) => {
    //         return resolve({
    //             code: 200,
    //             success: true,
    //             user: { address },
    //             msg: "metamask credentials verified!"
    //         })
    //     })
    // }



    // signupWithEmailPassword = async (req, res) => {

    //     const { email, password } = req.body;

    //     return new Promise(async (resolve, reject) => {

    //         try {


    //             const match = await users.findOne({ email });

    //             if (match) return reject({ param: 'email', message: 'email already taken!' })


    //             const HashedPassword = HashingPassword(password);

    //             const data = new users({
    //                 ...req.body,
    //                 password: HashedPassword
    //             });

    //             const res = await data.save();

    //             return resolve({
    //                 code: 200,
    //                 success: true,
    //                 user: { email: res.email, type: res.type, id: res._id },
    //                 msg: "Your account has been created."
    //             });



    //         } catch (error) {
    //             console.log('error', error);
    //             return reject(error)
    //         }
    //     })
    // }


    // loginWithEmailPassword = async (req, res) => {

    //     const { email, password } = req.body;

    //     return new Promise(async (resolve, reject) => {

    //         try {


    //             const user = await users.find({ email, type: { $eq: "emailPassword" } });

    //             // if (user.length == 0) return reject({ param: 'email', message: 'email deos not exist!' })

    //             if (user.length != 0) {

    //                 // const matchPassword = jwt.verify(user[0].password, process.env.JWT_SECRET, (err, decoded) => {
    //                 //     if (decoded === password)
    //                 //         return true;
    //                 //     else
    //                 //         return err;
    //                 // });

    //                 if (matchPassword(user[0].password, password)) {

    //                     const token = jwt.sign(user[0]._id.toString(), process.env.JWT_SECRET);

    //                     return resolve({
    //                         code: 200,
    //                         success: true,
    //                         token: `Bearer ${generateToken(user[0]._id.toString())}`,
    //                         user: user[0],
    //                         msg: "You are now logged in."
    //                     });


    //                 } else {
    //                     return reject("password did't matched")
    //                 }
    //             } else {
    //                 return reject({ param: 'email', message: 'email deos not exist!' })
    //             }


    //         } catch (error) {
    //             console.log('error', error);
    //             return reject(error)
    //         }
    //     })
    // }



    // forgotPassword = async (req, res) => {

    //     const { email } = req.body;

    //     return new Promise(async (resolve, reject) => {

    //         try {


    //             const user = await validateEmail(email);

    //             if (!user) return reject({ param: 'email', message: 'email does not exist!', email })


    //             const otp = generateOtp();

    //             await sendMail(user, otp);


    //             await users.findByIdAndUpdate(user._id, { otp });


    //             return resolve({
    //                 code: 200,
    //                 success: true,
    //                 user: { email: user.email, type: user.type, id: user._id },
    //                 msg: "email has been send for reset password!"
    //             });



    //         } catch (error) {
    //             console.log('error', error);
    //             return reject(error)
    //         }
    //     })
    // }


    // matchOtp = async (req, res) => {
    //     const { otp, email } = req.query;

    //     return new Promise(async (resolve, reject) => {

    //         try {

    //             const user = await validateEmail(email);

    //             if (!user) return reject({ param: 'email', message: 'email does not exist!', email })

    //             if (user.otp === otp) {
    //                 return resolve({
    //                     code: 200,
    //                     success: true,
    //                     otp,
    //                     user: { email: user.email, type: user.type, id: user._id, },
    //                     msg: "Otp has been matched!"
    //                 });
    //             } else {
    //                 return reject({ success: false, code: 401, msg: "code did't matched", otp, email });

    //             }


    //         } catch (error) {
    //             console.log('error', error);
    //             return reject(error)
    //         }
    //     })


    // }
    // resetPassword = async (req, res) => {

    //     const { otp, email } = req.query;
    //     const { password } = req.body;

    //     return new Promise(async (resolve, reject) => {

    //         try {


    //             const user = await validateEmail(email);

    //             if (!user) return reject({ param: 'email', message: 'email does not exist!', email })


    //             if (user.otp === otp) {
    //                 const HashedPassword = HashingPassword(password);
    //                 try {
    //                     await users.findOneAndUpdate({ email }, { password: HashedPassword })
    //                     return resolve({
    //                         code: 200,
    //                         success: true,
    //                         user: { email: user.email, type: user.type, id: user._id },
    //                         msg: "Your account password has been changed."
    //                     });
    //                 } catch (error) {
    //                     return reject(error);
    //                 }
    //             } else {
    //                 return reject({ success: false, code: 401, msg: "code did't matched", otp, email });

    //             }

    //         } catch (error) {
    //             console.log('error', error);
    //             return reject(error)
    //         }
    //     })
    // }
    // Bounce = (req, res) => {

    //     return Math.floor(Math.random() * 1000000);

    // }


};


export default new UsersModel();
