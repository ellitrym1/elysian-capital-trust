import { Request, Response } from "express";

export const createTransaction = (req: Request, res: Response) => {
    res.json({ message: "Transaction created successfully." });
};

export const getTransactionDetails = (req: Request, res: Response) => {
    res.json({ message: "Transaction details retrieved successfully." });
};
