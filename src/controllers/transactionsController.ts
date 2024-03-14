import { Request, Response } from "express";
import Transaction from "../models/transaction";

export const createTransaction = async (req: Request, res: Response) => {
    const { toWalletId, amount, description } = req.body;
    const { walletId } = req.params;

    try {
        const transaction = await Transaction.create({
            fromWalletId: walletId,
            toWalletId,
            amount,
            description,
        });

        res.status(201).json({
            message: "Transaction created successfully.",
            transaction,
        });
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
            where: { fromWalletId: walletId },
        });

        res.json({ transactions });
    } catch (error) {
        console.error("Error fetching transactions for wallet:", error);
        res.status(500).json({
            error: "Failed to fetch transactions for wallet.",
        });
    }
};
