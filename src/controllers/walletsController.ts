import { Request, Response } from "express";

export const createWallet = (req: Request, res: Response) => {
    res.json({ message: "Wallet created successfully." });
};

export const getWalletDetails = (req: Request, res: Response) => {
    res.json({ message: "Wallet details retrieved successfully." });
};
