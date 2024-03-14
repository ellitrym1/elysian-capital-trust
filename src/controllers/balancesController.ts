import { Request, Response } from "express";
import Wallet from "../models/wallet";

export const getWalletBalance = async (req: Request, res: Response) => {
    const walletId = parseInt(req.params.walletId);

    try {
        const wallet = await Wallet.findByPk(walletId);

        if (!wallet) {
            return res.status(404).json({ message: "Wallet not found." });
        }

        const balance = wallet.balance;

        res.json({ balance });
    } catch (error) {
        console.error("Error retrieving wallet balance:", error);
        res.status(500).json({ message: "Internal server error." });
    }
};
