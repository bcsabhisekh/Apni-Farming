import express from "express";

import { addCropDetail, getCropDetailByName, getCropDetailByYear, getCropDetailCustom, getDisease } from "../controllers/functions.js";
import { imageUpload, uploadImage } from "../controllers/mlfunction.js";

const router = express.Router();

router.post("/upload", uploadImage, imageUpload);
router.post("/addcrop", addCropDetail);
router.get("/getcustom/:year", getCropDetailCustom);
router.get("/getyear", getCropDetailByYear);
router.get("/getname", getCropDetailByName);
router.get("/getdisease/:symptom", getDisease);

export default router;