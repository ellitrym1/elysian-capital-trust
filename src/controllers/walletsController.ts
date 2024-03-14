import { Request, Response } from "express";
import Wallet from "../models/wallet";

export const getWallets = async (req: Request, res: Response) => {
    try {
        const accountId = req.params.accountId;
        const wallets = await Wallet.findAll({ where: { accountId } });
        res.json({ wallets });
    } catch (error) {
        console.error("Error fetching wallets:", error);
        res.status(500).json({ error: "Failed to fetch wallets." });
    }
};

export const createWallet = async (req: Request, res: Response) => {
    const { accountId } = req.params;

    try {
        const wallet = await Wallet.create({ accountId });
        res.status(201).json({
            message: "Wallet created successfully.",
            wallet,
        });
    } catch (error) {
        console.error("Error creating wallet:", error);
        res.status(500).json({ error: "Failed to create wallet." });
    }
};

export const getWalletDetails = async (req: Request, res: Response) => {
    const walletId = req.params.walletId;

    try {
        const wallet = await Wallet.findByPk(walletId);

        if (!wallet) {
            return res.status(404).json({ message: "Wallet not found." });
        }

        res.json({ wallet });
    } catch (error) {
        console.error("Error fetching wallet details:", error);
        res.status(500).json({ error: "Failed to fetch wallet details." });
    }
};
