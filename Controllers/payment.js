import { Payment } from "../Model/payment";

export const PaymentController = (req, res) => {
    const result = Payment(req);
    result
      .then((resp) => {
        res.status(200).json(resp);
      })
      .catch((e) => {
        res.status(400).json(e);
      })
  }