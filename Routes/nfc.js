import express from "express";
const router = express.Router();
import NfcController from '../Controllers/NfcController';
import * as middleware from '../middleware/authenticate';

router.post("/createnfc",NfcController.PostNfc);
router.get("/getsinglenfc", NfcController.GetsingleNfc);
router.get("/getnfc", NfcController.GetNfc);
router.post("/createauthor", NfcController.CreateAuthor);
router.post("/createowner", NfcController.CreateOwner);
// router.post("/createcreator", NfcController.CreateCreator);
router.post("/postkyc", NfcController.PostKyc);
router.post("/postkyb", NfcController.PostKyb);
router.put("/verifyform",NfcController.Verifyform);
export default  router;
