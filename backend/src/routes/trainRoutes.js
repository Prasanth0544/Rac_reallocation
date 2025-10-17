import express from "express";
const router = express.Router();

router.get("/test", (req, res) => {
  res.json({ message: "Train API working fine!" });
});

export default router;
