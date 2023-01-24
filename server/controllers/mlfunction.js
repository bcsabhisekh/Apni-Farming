import express from "express";
const app = express();
import multer from "multer";
import axios from "axios";
import fs from "fs";
const multerStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images");
    },
    filename: (req, file, cb) => {
        const ext = file.mimetype.split("/")[1];
        cb(null, "photo.jpg");
    },
});
// `${file.originalname}` replaced by "photo.jpg"


const multerFilter = (req, file, cb) => {
    if (file.mimetype.startsWith("image")) {
        cb(null, true);
    } else {
        cb(new Error("Not a Image File!!"), false);
    }
};

const upload = multer({
    storage: multerStorage,
    fileFilter: multerFilter,
})

export const uploadImage = upload.single("photo")


// upload = imageUpload
export const imageUpload = async function (req, res) {
    const files = ["./images/photo.jpg"];
    const base64files = files.map(file => fs.readFileSync(file, 'base64'));
    const data = {
        api_key: "XSAKKgcj9zckEWrfjFCPcBZ4RSa6sgvQE7Sso6uVxfXlPDXG3M",
        images: base64files,
        /* modifiers docs: https://github.com/flowerchecker/Plant-id-API/wiki/Modifiers */
        modifiers: ["crops_fast", "similar_images"],
        language: "en",
        /* disease details docs: https://github.com/flowerchecker/Plant-id-API/wiki/Disease-details */
        disease_details: ["cause",
            "common_names",
            "classification",
            "description",
            "treatment",
            "url"],
    };
    const response = await axios.post('https://api.plant.id/v2/health_assessment', data);
    let record = [];
    let temp_record = response.data.health_assessment.diseases;
    let url = response.data.images[0].url;
    let is_plant = response.data.is_plant;
    temp_record.map((item) => {
        if (item.probability > 0.30) {
            let obj = {
            name: item.name,
            probability: item.probability,
            description: item.disease_details.description,
            source: item.disease_details.url,
            biological: item.disease_details.treatment.biological,
            chemical: item.disease_details.treatment.chemical,
            prevention: item.disease_details.treatment.prevention
        };
        record.push(obj);
    }
    })
    let final_result = {
        url: url,
        is_plant: is_plant,
        record: record
    };
    res.send(final_result)
};