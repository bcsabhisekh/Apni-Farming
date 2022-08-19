import axios from "axios";
import express from "express";
import mongoose from "mongoose";
import _ from "lodash";
const app = express();
import { v4 as uuid } from "uuid";

mongoose.connect("mongodb+srv://admin-khushboo:khushboo9198@cluster0.mrg3ztd.mongodb.net/cropDB", { useNewUrlParser: true });
const cropSchema = new mongoose.Schema({
    id: String,
    email: String,
    year: String,
    crop_name: String,
    seed_type: String,
    production: Number,
    input_cost: Number,
    weather: String,
    fertilizer: String
});

const Crop = mongoose.model("Crop", cropSchema);

export const fetchRecord = async function (req, res) {
    const url = "https://commodities-api.com/api/latest?access_key=yv55n5syda5671305xrs0vtkkfh34e1531gweijuzyvycpnix44vv63tw5j1&base=USD&symbols=RICE%2CWHEAT%2CSUGAR%2CCORN%2CWTIOIL%2CBRENTOIL%2CSOYBEAN%2CCOFFEE%2CRUBBER%2CCOTTON%2CROBUSTA%2CCOCOA";
    try {
        const data = await axios.get(url);
        res.send(data.data.rates);
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
}

export const addCropDetail = function (req, res) {
    const cropData = new Crop({
        id: uuid(),
        email: req.params.email,
        year: req.body.year,
        crop_name: req.body.crop_name,
        seed_type: req.body.seed_type,
        production: parseInt(req.body.production, 10),
        input_cost: parseInt(req.body.input_cost, 10),
        weather: req.body.weather,
        fertilizer: req.body.fertilizer
    });
    cropData.save(function (err) {
        if (!err) {
            res.send("Successfully added a crop into cropDB.");
        }
        else {
            res.send(err);
        }
    });
}

const priceList = {
    wheat: 1200,
    soyabean: 1500,
    rice: 800,
    oil: 1800,
    sugar: 1000
};

export const getCropDetailByYear = async function (req, res) {
    Crop.find({}, function (err, result) {
        if (!err) {
            const date = new Date();
            const year = date.getFullYear();
            const record = [];
            for (let i = year - 10; i <= year; i++) {
                let profit = 0;
                result && result.map((item) => {
                    if (item.year == i && item.email == req.params.email) {
                        switch (item.crop_name) {
                            case "Wheat":
                                profit += (item.production * priceList.wheat - item.input_cost);
                                break;
                            case "Rice":
                                profit += (item.production * priceList.rice - item.input_cost);
                                break;
                            case "Sugar":
                                profit += (item.production * priceList.sugar - item.input_cost);
                                break;
                            case "Soyabean":
                                profit += (item.production * priceList.soyabean - item.input_cost);
                                break;
                            case "Oil":
                                profit += (item.production * priceList.oil - item.input_cost);
                                break;
                            default:
                                break;
                        }
                    }
                });
                record.push({
                    year: i,
                    profit: profit
                });
            }
            res.send(record);
        }
        else {
            console.log(err);
        }
    });
}


export const getCropDetailByName = async function (req, res) {
    Crop.find({}, function (err, result) {
        if (!err) {
            const obj = {
                Wheat: 0,
                Rice: 0,
                Sugar: 0,
                Soyabean: 0,
                Oil: 0
            };
            result && result.map((item) => {
                if (item.email == req.params.email) {
                    switch (item.crop_name) {
                        case "Wheat":
                            obj["Wheat"] += (item.production * priceList.wheat - item.input_cost);
                            break;
                        case "Rice":
                            obj["Rice"] += (item.production * priceList.rice - item.input_cost);
                            break;
                        case "Sugar":
                            obj["Sugar"] += (item.production * priceList.sugar - item.input_cost);
                            break;
                        case "Soyabean":
                            obj["Soyabean"] += (item.production * priceList.soyabean - item.input_cost);
                            break;
                        case "Oil":
                            obj["Oil"] += (item.production * priceList.oil - item.input_cost);
                            break;
                        default:
                            break;
                    }
                }
            })
            const record = [];
            record.push({ name: "Wheat", profit: obj["Wheat"] });
            record.push({ name: "Rice", profit: obj["Rice"] });
            record.push({ name: "Sugar", profit: obj["Sugar"] });
            record.push({ name: "Soyabean", profit: obj["Soyabean"] });
            record.push({ name: "Oil", profit: obj["Oil"] });
            res.send(record);
        }
        else
            console.log(err);
    })
}


export const getCropDetailCustom = async function (req, res) {
    const year = req.params.year;
    const record = [];
    Crop.find({}, function (err, result) {
        if (!err) {
            result && result.map((item) => {
                if (year === item.year && item.email == req.params.email) {
                    let profit = 0, weather = "", seed = "", fertilizer = "";
                    switch (item.crop_name) {
                        case "Wheat":
                            profit = (item.production * priceList.wheat - item.input_cost);
                            weather = item.weather;
                            seed = item.seed_type;
                            fertilizer = item.fertilizer;
                            break;
                        case "Rice":
                            profit = (item.production * priceList.rice - item.input_cost);
                            weather = item.weather;
                            seed = item.seed_type;
                            fertilizer = item.fertilizer;
                            break;
                        case "Sugar":
                            profit = (item.production * priceList.sugar - item.input_cost);
                            weather = item.weather;
                            seed = item.seed_type;
                            fertilizer = item.fertilizer;
                            break;
                        case "Soyabean":
                            profit = (item.production * priceList.soyabean - item.input_cost);
                            weather = item.weather;
                            seed = item.seed_type;
                            fertilizer = item.fertilizer;
                            break;
                        case "Oil":
                            profit = (item.production * priceList.oil - item.input_cost);
                            weather = item.weather;
                            seed = item.seed_type;
                            fertilizer = item.fertilizer;
                            break;
                        default:
                            break;
                    }
                    const obj = {
                        name: item.crop_name,
                        profit: profit,
                        weather: weather,
                        seed: seed,
                        fertilizer: fertilizer
                    };
                    // record(...record, obj);
                    record.push(obj);
                }
            });
            // console.log(record);
            res.send(record);
        }
        else {
            console.log(err);
        }
    });
}

const diseaseSchema = new mongoose.Schema({
    id: String,
    title: String,
    symptoms: String,
    cause: String,
    treatment: String,
    prevention: String
});

const Disease = mongoose.model("Disease", diseaseSchema);



export const getDisease = function (req, res) {
    const symptom = _.kebabCase(req.params.symptom);
    Disease.findOne({ symptoms: symptom }, function (err, result) {
        if (!err) {
            res.send(result);
        }
        else {
            res.send("No such disease found");
        }
    });
}


const userSchema = new mongoose.Schema({
    id: String,
    name: String,
    email: String,
    dob: Date,
    gender: String,
    password: String,
    repassword: String
});

const User = mongoose.model("User", userSchema);

export const registerUser = function (req, res) {

    const { name, email, dob, gender, password, repassword } = req.body;
    User.findOne({ email: email }, (err, result) => {
        if (result) {
            res.send({ message: "User with this email is already registerd" });
        } else {
            const user = new User({
                id: uuid(),
                name,
                email,
                dob,
                gender,
                password,
                repassword
            });
            user.save(err => {
                if (err) {
                    res.send({ message: "Server Side Error" });
                } else {
                    res.send({ message: "Successfully Registered, Please login now." })
                }
            })
        }
    })
}


export const loginUser = function (req, res) {
    const { email, password } = req.body;
    User.findOne({ email: email, password: password }, (err, result) => {
        if (result) {
            res.send({ message: "Login Successful", user: result });
        }
        else {
            res.send({ message: "User not registered", user: {} });
        }
    })
}