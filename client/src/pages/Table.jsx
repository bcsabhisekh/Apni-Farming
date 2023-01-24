import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ReactComponent as Loader } from '../assets/LoaderIcon.svg';

export default function Table({ loginStatus, setLoginStatus }) {

    const [cropDetail, setCropDetail] = useState({
        email: "",
        year: "",
        crop_name: "Select",
        seed_type: "",
        production: "",
        input_cost: "",
        weather: "",
        fertilizer: ""
    });

    const curr_year = new Date().getFullYear();

    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate();

    const onFormSubmit = async (e) => {
        e.preventDefault();
        const { year, crop_name, seed_type, production, input_cost, weather, fertilizer } = cropDetail;
        if (year && (crop_name != "Select") && seed_type && production && input_cost && weather && fertilizer) {
            try {
                const response = await axios.post(`http://localhost:5000/addcrop/${loginStatus.email}`, cropDetail);
                navigate("/graph");
            } catch (err) {
                throw new Error('Unable to get a token.')
            }
        }
        else {
            alert("Complete all the Input Fields");
        }
    }

    useEffect(() => {
        setCropDetail({
            ...cropDetail,
            email: loginStatus.email
        })
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target
        setCropDetail({
            ...cropDetail,
            [name]: value
        })
    }

    return (
        <>
            <Header loginStatus={loginStatus} setLoginStatus={setLoginStatus} />
            <section className="text-gray-900 body-font relative">
                <div className="container px-5 py-16 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Enter Crop Details</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Enter the details of your obtained crop.</p>
                    </div>
                    <div className="lg:w-1/2 md:w-2/3 mx-auto">
                        <form onSubmit={onFormSubmit}>
                            <div className="flex flex-wrap -m-2">
                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <label for="name" className="leading-7 text-sm text-gray-900">Year</label>
                                        <input type="number" autocomplete="off" min="1900" max={curr_year} id="name" onChange={handleChange} value={cropDetail.year} name="year" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div className="p-2 w-1/2">
                                    <label for="full-name" className="leading-7 text-sm text-gray-900">Choose Crop</label>
                                    <select value={cropDetail.crop_name} onChange={handleChange} name="crop_name" className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                        <option value="Select">Select</option>
                                        <option value="Wheat">Wheat</option>
                                        <option value="Rice">Rice</option>
                                        <option value="Sugar">Sugar</option>
                                        <option value="Soyabean">Soyabean</option>
                                        <option value="Oil">Oil</option>
                                    </select>
                                </div>
                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <label for="name" className="leading-7 text-sm text-gray-900">Total Production (in tones)</label>
                                        <input type="number" autocomplete="off" id="name" name="production" onChange={handleChange} value={cropDetail.production} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <label for="name" className="leading-7 text-sm text-gray-900">Total Input Cost (INR)</label>
                                        <input type="number" autocomplete="off" id="name" name="input_cost" onChange={handleChange} value={cropDetail.input_cost} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <div className="relative">
                                        <label for="name" className="leading-7 text-sm text-gray-900">Seed Type</label>
                                        <input type="text" autocomplete="off" id="name" name="seed_type" onChange={handleChange} value={cropDetail.seed_type} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <div className="relative">
                                        <label for="message" className="leading-7 text-sm text-gray-900">Weather Description</label>
                                        <textarea id="message" autocomplete="off" name="weather" onChange={handleChange} value={cropDetail.weather} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 h-16 text-base outline-none text-gray-900 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <div className="relative">
                                        <label for="message" className="leading-7 text-sm text-gray-900">Used Fertilizers</label>
                                        <textarea id="message" autocomplete="off" name="fertilizer" onChange={handleChange} value={cropDetail.fertilizer} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 h-16 text-base outline-none text-gray-900 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                    </div>
                                </div>
                                <div className="p-8 w-full">
                                    <button type="submit" className="flex mx-auto text-white bg-green-500 border-0 py-1 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">Post</button>
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