import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
const port = 3000;

app.use(cors());

app.get("/api/v1/", (req, res) => {
    res.json({ message: "Hello from the backend!" });
});

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
