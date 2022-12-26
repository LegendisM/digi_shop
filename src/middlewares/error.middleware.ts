import { Request, Response } from "express";

export const unknownMiddleware = (req: Request, res: Response) => {
    res.status(404).render("error", { code: 404, message: "Page Not Found" });
}

export const errorMiddleware = (error: any, req: Request, res: Response) => {
    res.status(500).render("error", {
        code: 500,
        message: process.env.NODE_ENV == "development" ? error.message : "Something went wrong with your request",
    });
}