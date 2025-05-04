
import ErrorHandler from "./error.js";
import jwt from "jsonwebtoken"
import { User } from "../models/userModel.js";
import { catchAsyncError } from "./catchAsyncError.js";
 

export const isAuthenticated = catchAsyncError(async (req, res, next) => {
    const { token} = req.cookies;
    if (!token) {
        return next ( new ErrorHandler("User is not  authenticated.", 400));
    }
    const decode = jwt.verify(token, process.env.JWT_SECRET_KEY);

    req.user = await User.findById(decode.id);

    next();

});

