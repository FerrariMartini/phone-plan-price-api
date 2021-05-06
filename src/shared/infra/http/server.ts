/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
// import 'express-async-errors';
import "reflect-metadata";
import AppError from "@shared/errors/AppErrors";
import routes from "./routes";
import "@shared/infra/typeorm";
import "@shared/container";

const app = express();

app.use(cors());
app.use(express.json());

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    // error from app
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        status: "error",
        message: err.message,
      });
    }

    console.error(err);

    // unkown error
    return response.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
);

app.use(routes);

app.listen(3333, () => {
  console.log("SERVER UP - PORT: 3333");
});
