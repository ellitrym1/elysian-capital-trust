import { Router } from "express";
import * as balancesController from "../controllers/balancesController";

const router = Router();

router.get("/", balancesController.getWalletBalance);

export default router;
