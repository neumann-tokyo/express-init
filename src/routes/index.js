import express from "express";

const router = express.Router();

router.get("/", async (_req, res) => {
  return res.status(200).json({ result: "ok" });
});

export default router;
