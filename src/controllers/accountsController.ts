import { Request, Response } from "express";

export const createAccount = (req: Request, res: Response) => {
    res.json({ message: "Account created successfully." });
};

export const getAccountDetails = (req: Request, res: Response) => {
    res.json({ message: "Account details retrieved successfully." });
};
