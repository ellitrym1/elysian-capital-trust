import { Router } from "express";
import * as walletsController from "../controllers/walletsController";

const router = Router();

router.post("/", walletsController.createWallet);
router.get("/:walletId", walletsController.getWalletDetails);

export default router;
