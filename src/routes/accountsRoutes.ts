import { Router } from "express";
import * as accountsController from "../controllers/accountsController";

const router = Router();

router.get("/", accountsController.getAccounts);
router.post("/register", accountsController.registerAccount);
router.post("/login", accountsController.loginAccount);
router.get("/:accountId", accountsController.getAccountDetails);

export default router;
