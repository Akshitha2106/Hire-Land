import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import userRouter from "./routes/userRouter.js";
import applicationRouter from "./routes/applicationRouter.js";
import jobRouter from "./routes/jobRouter.js";
import { dbConnection } from "./database/dbConnection.js";
import { errorMiddleWare } from "./middlewares/error.js";

dotenv.config({ path: "./config.env" });
const app = express();

app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

app.use("/api/user", userRouter);
app.use("/api/application", applicationRouter);
app.use("/api/job", jobRouter);
app.use("*", (req, res) => {
  res.status(404).json({
    message: "Page not found",
  });
});

dbConnection();

app.use(errorMiddleWare);

export default app;
