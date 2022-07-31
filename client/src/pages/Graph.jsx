import React, { useState, PureComponent, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";
import { useNavigate } from "react-router-dom";
import Graph_Result from "./Graph_Result";


export default function Graph() {

    const navigate = useNavigate();

    const [year_data, setYearData] = useState("");
    const [data, setData] = useState([]);
    const [name_data, setNameData] = useState([]);
    const [custom_data, setCustomData] = useState([]);
    const [flag, setFlag] = useState(false);

    const onFormSubmit = async (e) => {
        e.preventDefault();
        if (year_data) {
            try {
                const response = await axios.get(`http://localhost:5000/getcustom/${year_data}`);
                setCustomData(response.data);
                if (response.data.length == 0)
                    alert("Record not found !");
                setFlag(true);
                navigate("/graph");
            } catch (err) {
                alert("Error occurred !");
            }
        }
        else {
            alert("Please Enter the Year First");
        }
    }

    const handleChange = (e) => {
        setYearData(e.target.value);
    }

    const getRecordByYear = async function () {
        const response = await axios.get("http://localhost:5000/getyear");
        if (response.status == 200) {
            setData(response.data);
        }
        else
            alert("Error occurred !");
    }


    const getRecordByName = async function () {
        const response = await axios.get("http://localhost:5000/getname");
        if (response.status == 200) {
            setNameData(response.data);
        }
        else
            alert("Error occurred !");
    }


    useEffect(() => {
        getRecordByYear();
        getRecordByName();
    }, []);

    return (
        <>
            <Header />
            {custom_data.length > 0 && flag === true ? <Graph_Result custom_data={custom_data} setCustomData={setCustomData} setFlag={setFlag} year={year_data} /> : <section class="text-gray-600 body-font">
                <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                    <h1 class="title-font sm:text-2xl mb-8 font-medium text-gray-900">Previous 10 Year's Profit Record (INR)</h1>
                    <BarChart
                        width={800}
                        height={500}
                        data={data}
                        margin={{
                            top: 5,
                            right: 10,
                            left: 10,
                            bottom: 10
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="year" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="profit" fill="#00e673" />
                        {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
                    </BarChart>
                    <div class="py-5"></div>
                    <h1 class="title-font sm:text-2xl mb-8 font-medium text-gray-900">Previous 10 Year's Profit Record sorted by name (INR)</h1>
                    <BarChart
                        width={800}
                        height={500}
                        data={name_data}
                        margin={{
                            top: 5,
                            right: 10,
                            left: 10,
                            bottom: 0
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="profit" fill="#00e673" />
                        {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
                    </BarChart>
                    <div class="container px-5 py-20 mx-auto">
                        <div class="flex flex-col text-center w-full mb-12">
                            <h1 class="sm:text-2xl font-medium title-font mb-0 text-gray-900">Fetch a Particular Record by Year</h1>
                        </div>
                        <div class="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
                            <div class="relative flex-grow w-full">
                                <form onSubmit={onFormSubmit}>
                                    <div class="flex flex-wrap -m-2">
                                        <div class="p-2 w-full">
                                            <div class="relative">
                                                <label for="name" class="leading-7 text-sm text-gray-600">Year</label>
                                                <input type="number" id="name" onChange={handleChange} value={year_data} name="year" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                            </div>
                                        </div>
                                        <div class="p-8 w-full">
                                            <button type="submit" class="flex mx-auto text-white bg-indigo-500 border-0 py-1 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Get</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div >
            </section>}
            <Footer />
        </>
    )
}