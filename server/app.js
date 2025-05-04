 import express from "express";
 import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import { connection } from "./database/dbconnection.js";
import { errorMiddleware } from "./middlewares/error.js";
import userRouter from "./routes/userRouter.js"
import { removeUnverifiedAccounds } from "./automation/removeUnverifiedAccounds.js"


export const app = express();
dotenv.config();
app.use(
    cors({
        origin: ["process.env.FRONTEND_URL"],
        methods: ["GET", "POST", "PUT", "DELETE"],
        Credentials: true,
    })
);

app.use(cookieParser());
app.use(express.json()),
app.use(express.urlencoded({ extended: true}));

// Routes
app.use("/api/v1/user", userRouter);

//http:localhost:4000/api/vi/user/register

removeUnverifiedAccounds();
connection();

app.use(errorMiddleware)