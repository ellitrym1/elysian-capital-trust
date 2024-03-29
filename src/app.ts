import "reflect-metadata";

import express, { Application, json } from "express";
import cors from "cors";
import { Sequelize } from "sequelize-typescript";
import swaggerUi from "swagger-ui-express";
import dotenv from "dotenv";
import swaggerDocument from "./swagger.json";

dotenv.config();

import accountsRoutes from "./routes/accountsRoutes";
import walletsRoutes from "./routes/walletsRoutes";
import transactionsRoutes from "./routes/transactionsRoutes";
import balancesRoutes from "./routes/balancesRoutes";

const app: Application = express();
const port: number = 3000;
const { DB_HOST, DB_USER, DB_NAME, DB_PORT } = process.env;

app.use(cors());
app.use(json());

const apiPrefix: string = "/api/v1";

const sequelize = new Sequelize({
    dialect: "postgres",
    username: DB_USER,
    database: DB_NAME,
    host: DB_HOST,
    port: parseInt(DB_PORT || "5432"),
    models: [__dirname + "/models"],
    logging: false,
});

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

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
