import { Router } from "express";
import * as transactionsController from "../controllers/transactionsController";

const router = Router();

router.post("/", transactionsController.createTransaction);
router.get("/:transactionId", transactionsController.getTransactionDetails);

export default router;
