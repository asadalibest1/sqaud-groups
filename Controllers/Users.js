
import UsersModel from "../Model/User";

class UsersController {
    groupInvitation = async (req, res) => {
        try {
            const request = await UsersModel.groupInvitation(req, res);
            return res.status(200).json(request);
        } catch (error) {
            console.log(error);
            res.status(403).json(error)
        }


    }

    updateProfile = async (req, res) => {
        try {
            const request = await UsersModel.updateProfile(req, req);
            return res.status(200).json(request);
        } catch (error) {
            console.log(error);
            res.status(403).json(({ error }))
        }
    }
    getProfile = async (req, res) => {
        try {
            const request = await UsersModel.getProfile(req, req);
            return res.status(200).json(request);
        } catch (error) {
            console.log(error);
            res.status(403).json(({ error }))
        }
    }


    signupWithEmailPassword = async (req, res) => {
        try {
            const request = await UsersModel.signupWithEmailPassword(req, res);
            return res.status(200).json(request);
        } catch (error) {
            console.log(error);
            res.status(403).json(({ error }))
        }


    }

    loginWithEmailPassword = async (req, res) => {
        try {
            const request = await UsersModel.loginWithEmailPassword(req, res);
            return res.status(200).json(request);
        } catch (error) {
            console.log(error);
            res.status(403).json(({ error }))
        }
    }

    loginWithGmail = async (req, res) => {
        try {
            const request = await UsersModel.loginWithGmail(req, res);
            return res.status(200).json(request);
        } catch (error) {
            console.log(error);
            res.status(403).json(({ error }))
        }


    }

    forgotPassword = async (req, res) => {
        try {
            const request = await UsersModel.forgotPassword(req, res);
            return res.status(200).json(request);
        } catch (error) {
            console.log(error);
            res.status(403).json(({ error }))
        }


    }
    matchOtp = async (req, res) => {
        try {
            const request = await UsersModel.matchOtp(req, res);
            return res.status(200).json(request);
        } catch (error) {
            console.log(error);
            res.status(403).json(({ error }))
        }


    }
    resetPassword = async (req, res) => {
        try {
            const request = await UsersModel.resetPassword(req, res);
            return res.status(200).json(request);
        } catch (error) {
            console.log(error);
            res.status(403).json(({ error }))
        }


    }
    verifyMetamask = async (req, res) => {
        try {
            const request = await UsersModel.verifyMetamask(req, res);
            return res.status(200).json(request);
        } catch (error) {
            res.status(403).json(({ error }))
        }
    }

    Bounce = async (req, res) => {
        try {
            const request = await UsersModel.Bounce();
            return res.status(200).json(request);
        } catch (error) {
            res.status(403).json(({ error }))
        }
    }


}


export default new UsersController();