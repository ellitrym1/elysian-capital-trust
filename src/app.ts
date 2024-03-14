import "reflect-metadata";

import express, { Application, json } from "express";
import cors from "cors";
import { Sequelize } from "sequelize-typescript";
import dotenv from "dotenv";

dotenv.config();

import accountsRoutes from "./routes/accountsRoutes";
import walletsRoutes from "./routes/walletsRoutes";
import transactionsRoutes from "./routes/transactionsRoutes";
import balancesRoutes from "./routes/balancesRoutes";
import { error } from "console";

const app: Application = express();
const port: number = process.env.NODE_ENV === "production" ? 3000 : 8080;
const { DB_HOST, DB_USER, DB_NAME } = process.env;

app.use(cors());
app.use(json());

const apiPrefix: string = "/api/v1";

const sequelize = new Sequelize({
    dialect: "postgres",
    username: DB_USER,
    database: DB_NAME,
    host: DB_HOST,
    port: 5432,
    models: [__dirname + "/models"],
    logging: false,
});

app.use(`${apiPrefix}/accounts`, accountsRoutes);
app.use(`${apiPrefix}/accounts`, walletsRoutes);
app.use(`${apiPrefix}/accounts`, transactionsRoutes);
app.use(`${apiPrefix}/accounts`, balancesRoutes);

sequelize
    .sync()
    .then(() => {
        app.listen(port, () => {
            console.log(`Server is listening at http://localhost:${port}`);
        });
    })
    .catch((error) => {
        console.error("Unable to connect to the database:", error);
    });
