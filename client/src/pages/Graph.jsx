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


export default function Graph({ loginStatus, setLoginStatus }) {

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
                const response = await axios.get(`http://localhost:5000/getcustom/${loginStatus.email}/${year_data}`);
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
        const response = await axios.get(`http://localhost:5000/getyear/${loginStatus.email}`);
        if (response.status == 200) {
            setData(response.data);
        }
        else
            alert("Error occurred !");
    }


    const getRecordByName = async function () {
        const response = await axios.get(`http://localhost:5000/getname/${loginStatus.email}`);
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
            <Header loginStatus={loginStatus} setLoginStatus={setLoginStatus} />
            {custom_data.length > 0 && flag === true ? <Graph_Result custom_data={custom_data} setCustomData={setCustomData} setFlag={setFlag} year={year_data} /> : <section className="text-gray-900 body-font">
                <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                    <h1 className="title-font sm:text-2xl mb-8 font-medium text-gray-900">Previous 10 Year's Profit Record (INR)</h1>
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
                    <div className="py-5"></div>
                    <h1 className="title-font sm:text-2xl mb-8 font-medium text-gray-900">Previous 10 Year's Profit Record sorted by name (INR)</h1>
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
                    <div className="container px-5 py-20 mx-auto">
                        <div className="flex flex-col text-center w-full mb-12">
                            <h1 className="sm:text-2xl font-medium title-font mb-0 text-gray-900">Fetch a Particular Record by Year</h1>
                        </div>
                        <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
                            <div className="relative flex-grow w-full">
                                <form onSubmit={onFormSubmit}>
                                    <div className="flex flex-wrap -m-2">
                                        <div className="p-2 w-full">
                                            <div className="relative">
                                                <label for="name" className="leading-7 text-sm text-gray-900">Year</label>
                                                <input type="number" autocomplete="off" id="name" onChange={handleChange} value={year_data} name="year" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                            </div>
                                        </div>
                                        <div className="p-8 w-full">
                                            <button type="submit" className="flex mx-auto text-white bg-green-600 border-0 py-1 px-8 focus:outline-none hover:bg-green-800 rounded text-lg">Get</button>
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