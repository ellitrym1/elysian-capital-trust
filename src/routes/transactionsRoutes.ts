import { Router } from "express";
import * as transactionsController from "../controllers/transactionsController";

const router = Router();

router.post(
    "/:accountId/wallets/:walletId/transactions",
    transactionsController.createTransaction
);
router.get(
    "/:accountId/wallets/:walletId/transactions/:transactionId",
    transactionsController.getTransactionDetails
);
router.get(
    "/:accountId/wallets/:walletId/transactions",
    transactionsController.getTransactionsForWallet
);

export default router;
