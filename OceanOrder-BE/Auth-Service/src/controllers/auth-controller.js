import UserService from "../services/user-service.js";

const userService = new UserService();

export const signup = async(req, res) => {
    try {
        const response = await userService.signup({
            name: req.body.name,
            email: req.body.email,
            password:  req.body.password,
            phone: req.body.phone,
            address: req.body.address
        });
        return res.status(201).json({
            success: true,
            message: "User created successfully",
            data: response,
            err: {}
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message,
            data: {},
            err: err
        });
    }
}

export const signin = async (req, res) => {
    try {
        const token = await userService.signin(req.body);
        return res.status(200).json({
            success: true,  
            message: "User logged in successfully",
            data: token,
            err: {}
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message,
            data: {},
            err: err
        });
    }
}