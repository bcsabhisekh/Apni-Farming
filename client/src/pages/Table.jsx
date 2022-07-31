import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ReactComponent as Loader } from '../assets/LoaderIcon.svg';

export default function Table() {

    const [cropDetail, setCropDetail] = useState({
        year: "",
        crop_name: "",
        seed_type: "",
        production: "",
        input_cost: "",
        weather: "",
        fertilizer: ""
    });

    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate();

    const onFormSubmit = async (e) => {
        setIsLoading(true);
        e.preventDefault();
        const { year, crop_name, seed_type, production, input_cost, weather, fertilizer } = cropDetail;
        if (year && crop_name && seed_type && production && input_cost && weather && fertilizer) {
            try {
                const response = await axios.post("http://localhost:5000/addcrop", cropDetail);
                navigate("/graph");
            } catch (err) {
                throw new Error('Unable to get a token.')
            }
        }
        else {
            alert("Complete all the Input Fields");
        }
        setIsLoading(false);
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setCropDetail({
            ...cropDetail,
            [name]: value
        })
    }

    return (
        <>
            <Header />
            <section class="text-gray-600 body-font relative">
                <div class="container px-5 py-16 mx-auto">
                    <div class="flex flex-col text-center w-full mb-12">
                        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Enter Crop Details</h1>
                        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p>
                    </div>
                    <div class="lg:w-1/2 md:w-2/3 mx-auto">
                        <form onSubmit={onFormSubmit}>
                            <div class="flex flex-wrap -m-2">
                                <div class="p-2 w-1/2">
                                    <div class="relative">
                                        <label for="name" class="leading-7 text-sm text-gray-600">Year</label>
                                        <input type="number" min="1900" max="2022" id="name" onChange={handleChange} value={cropDetail.year} name="year" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div class="p-2 w-1/2">
                                    <label for="full-name" class="leading-7 text-sm text-gray-600">Choose Crop</label>
                                    <select value={cropDetail.crop_name} onChange={handleChange} name="crop_name" class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                        <option value="Wheat">Wheat</option>
                                        <option value="Rice">Rice</option>
                                        <option value="Sugar">Sugar</option>
                                        <option value="Soyabean">Soyabean</option>
                                        <option value="Oil">Oil</option>
                                    </select>
                                </div>
                                <div class="p-2 w-1/2">
                                    <div class="relative">
                                        <label for="name" class="leading-7 text-sm text-gray-600">Total Production (in tones)</label>
                                        <input type="number" id="name" name="production" onChange={handleChange} value={cropDetail.production} class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div class="p-2 w-1/2">
                                    <div class="relative">
                                        <label for="name" class="leading-7 text-sm text-gray-600">Total Input Cost (INR)</label>
                                        <input type="number" id="name" name="input_cost" onChange={handleChange} value={cropDetail.input_cost} class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div class="p-2 w-full">
                                    <div class="relative">
                                        <label for="name" class="leading-7 text-sm text-gray-600">Seed Type</label>
                                        <input type="text" id="name" name="seed_type" onChange={handleChange} value={cropDetail.seed_type} class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div class="p-2 w-full">
                                    <div class="relative">
                                        <label for="message" class="leading-7 text-sm text-gray-600">Weather Description</label>
                                        <textarea id="message" name="weather" onChange={handleChange} value={cropDetail.weather} class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-16 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                    </div>
                                </div>
                                <div class="p-2 w-full">
                                    <div class="relative">
                                        <label for="message" class="leading-7 text-sm text-gray-600">Used Fertilizers</label>
                                        <textarea id="message" name="fertilizer" onChange={handleChange} value={cropDetail.fertilizer} class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-16 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                    </div>
                                </div>
                                <div class="p-8 w-full">
                                    <button type="submit" class="flex mx-auto text-white bg-indigo-500 border-0 py-1 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Post</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}