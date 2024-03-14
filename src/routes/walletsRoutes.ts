import { Router } from "express";
import * as walletsController from "../controllers/walletsController";

const router = Router();

router.get("/:accountId/wallets", walletsController.getWallets);
router.post("/:accountId/wallets", walletsController.createWallet);
router.get("/:accountId/wallets/:walletId", walletsController.getWalletDetails);

export default router;
