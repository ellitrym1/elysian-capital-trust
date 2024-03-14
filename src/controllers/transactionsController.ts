import { Request, Response } from "express";
import Transaction from "../models/transaction";
import Wallet from "../models/wallet";
import { Op } from "sequelize";

export const createTransaction = async (req: Request, res: Response) => {
    try {
        const { fromWalletId, toWalletId, amount, description } = req.body;

        const fromWallet = await Wallet.findByPk(fromWalletId);
        const toWallet = await Wallet.findByPk(toWalletId);

        if (!fromWallet || !toWallet) {
            return res.status(404).json({ error: "Wallet not found" });
        }

        // if (fromWallet.balance < amount) {
        //     return res.status(400).json({ error: "Insufficient balance" });
        // }

        fromWallet.balance -= amount;
        await fromWallet.save();

        toWallet.balance += amount;
        await toWallet.save();

        await Transaction.create({
            fromWalletId,
            toWalletId,
            amount,
            description,
        });

        res.status(201).json({ message: "Transaction created successfully." });
    } catch (error) {
        console.error("Error creating transaction:", error);
        res.status(500).json({ error: "Failed to create transaction." });
    }
};

export const getTransactionDetails = async (req: Request, res: Response) => {
    const transactionId = req.params.transactionId;

    try {
        const transaction = await Transaction.findByPk(transactionId);

        if (!transaction) {
            return res.status(404).json({ message: "Transaction not found." });
        }

        res.json({ transaction });
    } catch (error) {
        console.error("Error fetching transaction details:", error);
        res.status(500).json({ error: "Failed to fetch transaction details." });
    }
};

export const getTransactionsForWallet = async (req: Request, res: Response) => {
    const walletId = req.params.walletId;

    try {
        const transactions = await Transaction.findAll({
            where: {
                [Op.or]: [{ fromWalletId: walletId }, { toWalletId: walletId }],
            },
        });

        res.json({ transactions });
    } catch (error) {
        console.error("Error fetching transactions for wallet:", error);
        res.status(500).json({
            error: "Failed to fetch transactions for wallet.",
        });
    }
};
