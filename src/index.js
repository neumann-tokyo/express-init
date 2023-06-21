import * as dotenv from "dotenv";
import cors from "cors";
import express from "express";
import morgan from "morgan";

import Router from "./routes/index.js";

dotenv.config();

const PORT = process.env.PORT || 3333;
const app = express();

const corsOptions = {
  origin: ["http://localhost:3334"],
  credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(morgan("dev"));
app.use(express.static("public"));

// TODO add more routes
app.use(Router);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
