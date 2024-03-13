import express, { Application, json } from "express";
import cors from "cors";
import accountsRoutes from "./routes/accountsRoutes";
import walletsRoutes from "./routes/walletsRoutes";
import transactionsRoutes from "./routes/transactionsRoutes";
import balancesRoutes from "./routes/balancesRoutes";

const app: Application = express();
const port: number = 3000;

app.use(cors());
app.use(json());

const apiPrefix: string = "/api/v1";

app.use(`${apiPrefix}/accounts`, accountsRoutes);
app.use(`${apiPrefix}/accounts/:accountId/wallets`, walletsRoutes);
app.use(
    `${apiPrefix}/accounts/:accountId/wallets/:walletId/transactions`,
    transactionsRoutes
);
app.use(
    `${apiPrefix}/accounts/:accountId/wallets/:walletId/balance`,
    balancesRoutes
);

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
