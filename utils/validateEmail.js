import users from "../Schema/Users";

const validateEmail = async (email) => {
    return await users.findOne({ email }).lean();
}

export default validateEmail;