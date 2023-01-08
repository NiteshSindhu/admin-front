// 63701cc1f03239b7f700000e

import express from "express";
import { getDashboardStats, getUser } from "../Controllers/general.js";

const router = express.Router();
router.get("/user/:id", getUser)
router.get("/dashboard", getDashboardStats);

export default router