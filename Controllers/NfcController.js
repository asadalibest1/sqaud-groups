import nfcmodel from "../Model/nfcmodel";

class NfcController {
  PostNfc = (req, res) => {
    const result = nfcmodel.PostNfc(req);
    result
      .then((resp) => {
        res.status(200).json(resp);
      })
      .catch((e) => {
        res.status(400).json(e);
      })
  }
  GetsingleNfc = (req, res) => {
    const result = nfcmodel.GetsingleNfc(req);
    result
      .then((resp) => {
        res.status(200).json(resp);
      })
      .catch((e) => {
        res.status(400).json(e);
      })
  }
  GetNfc = (req, res) => {
    const result = nfcmodel.GetNfc(req);
    result
      .then((resp) => {
        res.status(200).json(resp);
      })
      .catch((e) => {
        res.status(400).json(e);
      })
  }
  CreateAuthor = (req, res) => {
    const result = nfcmodel.CreateAuthor(req);
    result
      .then((resp) => {
        res.status(200).json(resp);
      })
      .catch((e) => {
        res.status(400).json(e);
      })
  }
  CreateOwner = (req, res) => {
    const result = nfcmodel.CreateOwner(req);
    result
      .then((resp) => {
        res.status(200).json(resp);
      })
      .catch((e) => {
        res.status(400).json(e);
      })
  }
  CreateCreator = (req, res) => {
    const result = nfcmodel.CreateCreator(req);
    result
      .then((resp) => {
        res.status(200).json(resp);
      })
      .catch((e) => {
        res.status(400).json(e);
      })
  }
  PostKyc = (req, res) => {
    const result = nfcmodel.PostKyc(req);
    result
      .then((resp) => {
        res.status(200).json(resp);
      })
      .catch((e) => {
        res.status(400).json(e);
      })
  }
  PostKyb = (req, res) => {
    const result = nfcmodel.PostKyb(req);
    result
      .then((resp) => {
        res.status(200).json(resp);
      })
      .catch((e) => {
        res.status(400).json(e);
      })
  }
  Verifyform = (req, res) => {
    const result = nfcmodel.Verifyform(req);
    result
      .then((resp) => {
        res.status(200).json(resp);
      })
      .catch((e) => {
        res.status(400).json(e);
      })
  }
}
export default new NfcController();