import express from 'express';
import { Payment } from '../Model/payment';
const router = express.Router();

router.post('/checkout', Payment);

export default router;