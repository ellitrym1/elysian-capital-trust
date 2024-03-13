import { Request, Response } from "express";

export const getWalletBalance = (req: Request, res: Response) => {
    res.json({ message: "Wallet balance retrieved successfully." });
};
