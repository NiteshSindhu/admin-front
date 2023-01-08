// import express from 'express';
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import clientRoutes from "./Routes/client.js";
import generalRoutes from "./Routes/general.js";
import managementRoutes from "./Routes/management.js";
import salesRoutes from "./Routes/sales.js";

// data import

// import User from "./Models/User.js";
// import { dataUser,dataProduct,dataProductStat, dataTransaction, dataOverallStat, dataAffiliateStat } from "./data/data.js";
// import Product from "./Models/Product.js";
// import ProductStat from "./Models/ProductStat.js";
// import Transaction from "./Models/Transaction.js";
// import OverallStat from "./Models/OverallStat.js";
// import AffiliateStat from "./Models/AfiliateStat.js";

// Configration

dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/* Set Routes */

app.use("/client", clientRoutes);
app.use("/general", generalRoutes);
app.use("/management", managementRoutes);
app.use("/sales", salesRoutes);

/* MONGOOSE SETUP */
const port = 9000;
mongoose.set("strictQuery", false);
mongoose
  .connect("mongodb+srv://niteshsindhu:nitesh@cluster0.rjogyex.mongodb.net/ballavita?retryWrites=true&w=majority")
  .then(() => {
    app.listen(port, () => {
      console.log(`Server run at the ${port}`);
    });
    //   add data one time
      // User.insertMany(dataUser);
    // Product.insertMany(dataProduct);
    // ProductStat.insertMany(dataProductStat)
    // Transaction.insertMany(dataTransaction);
    // AffiliateStat.insertMany(dataAffiliateStat);
    // OverallStat.insertMany(dataOverallStat);
  })
  .catch((err) => console.log(`${err} did not connect`));
