import { Request, Response } from "express";
import Account from "../models/account";

export const registerAccount = async (req: Request, res: Response) => {
    try {
        const {
            registrationNumber,
            firstName,
            lastName,
            phoneNumber,
            email,
            dateOfBirth,
            address,
        } = req.body;
        const account = await Account.create({
            registrationNumber,
            firstName,
            lastName,
            phoneNumber,
            email,
            dateOfBirth,
            address,
        });
        res.status(201).json({
            message: "Account created successfully",
            account,
        });
    } catch (error) {
        console.error("Error creating account:", error);
        res.status(500).json({
            error: "An error occurred while creating the account",
        });
    }
};

export const loginAccount = async (req: Request, res: Response) => {
    try {
        const { registrationNumber, pinCode } = req.body;
        const account = await Account.findOne({
            where: {
                registrationNumber: registrationNumber,
                pinCode: pinCode,
            },
        });
        res.status(201).json({
            message: `Logged in successfully ${registrationNumber} ${pinCode}`,
            account,
        });
    } catch (error) {
        console.error("Error logging in:", error);
        res.status(500).json({
            error: "An error occurred while logging in",
        });
    }
};

export const getAccountDetails = async (req: Request, res: Response) => {
    const accountId = req.params.accountId;

    try {
        const account = await Account.findByPk(accountId);
        if (account) {
            res.json(account);
        } else {
            res.status(404).json({ message: "Account not found" });
        }
    } catch (error) {
        console.error("Error retrieving account details:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const getAccounts = async (req: Request, res: Response) => {
    try {
        const accounts = await Account.findAll();
        res.json({ message: "All accounts retrieved successfully", accounts });
    } catch (error) {
        console.error("Error retrieving accounts:", error);
        res.status(500).json({
            error: "An error occurred while retrieving accounts",
        });
    }
};
