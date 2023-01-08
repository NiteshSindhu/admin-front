import express from "express";
import { getProducts, getGeography, getTransactions, getCustomers } from "../Controllers/client.js";
// import { getCustomers } from "../Controllers/management.js";

const router = express.Router();

router.get("/products", getProducts);
router.get("/customers", getCustomers);
router.get("/transactions", getTransactions);
router.get("/geography", getGeography);

export default router;
