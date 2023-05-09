import express from "express";
import Connectdb from './connection/connection';
import UsersRouter from './Routes/users';
import NfcRouter from './Routes/nfc';
import PaymentRouter from './Routes/payment'
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
const port = 3003;

//MIDDLEWARE
app.use(cors())
app.use(express.json());

app.use("/users", UsersRouter);
app.use("/nfc", NfcRouter);
app.use("/payment", PaymentRouter);
  
app.listen(port, () => {
    Connectdb()
    console.log(`server is running ${port}`)
})