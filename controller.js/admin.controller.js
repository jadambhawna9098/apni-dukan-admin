import Admin from "../model/admin.model.js";
import { validationResult } from "express-validator";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const signin = async (request, response, next) => {
    try {
        let admin = await Admin.findOne({
            raw: true,
            where: {
                email: request.body.email
            }
        });
        if (admin) {
            let status = await bcrypt.compare(request.body.password, admin.password);
            if (status) {
                let payload = { subject: admin.email };
                let token = jwt.sign(payload, 'abcdefg');
                return response.status(200).json({ message: "Sign in success", token: token, status: true });
            }
            return response.status(400).json({ error: "Bad request", status: false });
        }
    }
    catch (err) {
        console.log(err);
        return response.status(500).json({ error: "Internal Server Error", status: false });
    }
}

export const signup = async (request, response, next) => {
    try {
        const errors = await validationResult(request);
        if (!errors.isEmpty())
            return response.status(400).json({ error: "Bad request", messages: errors.array() });
        let saltKey = await bcrypt.genSalt(10);
        let encryptedPassword = await bcrypt.hash(request.body.password, saltKey);
        request.body.password = encryptedPassword;
        let admin = await Admin.create(request.body);
        return response.status(200).json({ admin: admin, status: true });
    }
    catch (err) {
        console.log(err)
        return response.status(500).json({ error: "Internal Server Error", status: false });
    }
}

export const signout = (request, response, next) => {
    request.body.admin = null;
    request.body.destroy()
    return response.status(200).json({ admin: null, status: true });
}

