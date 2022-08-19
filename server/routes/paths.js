import express from "express";

import { addCropDetail, getCropDetailByName, getCropDetailByYear, getCropDetailCustom, getDisease, loginUser, registerUser } from "../controllers/functions.js";
import { imageUpload, uploadImage } from "../controllers/mlfunction.js";

const router = express.Router();

router.post("/upload", uploadImage, imageUpload);
router.post("/addcrop/:email", addCropDetail);
router.get("/getcustom/:email/:year", getCropDetailCustom);
router.get("/getyear/:email", getCropDetailByYear);
router.get("/getname/:email", getCropDetailByName);
router.get("/getdisease/:symptom", getDisease);
router.post("/register", registerUser);
router.post("/login", loginUser);

export default router;