import { Router } from "express";
import * as balancesController from "../controllers/balancesController";

const router = Router();

router.get(
    "/:accountId/wallets/:walletId/balance",
    balancesController.getWalletBalance
);

export default router;
