import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Result from "../pages/Result.jsx";
import { ReactComponent as Loader } from '../assets/LoaderIcon.svg';

export default function Drag({ loginStatus, setLoginStatus }) {
    const [file, setFile] = useState(null);
    const [flag, setFlag] = useState(false);
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate();

    const onFormSubmit = async (e) => {
        setIsLoading(true)
        e.preventDefault();
        const formData = new FormData();
        formData.append("photo", file);
        const config = {
            headers: {
                "content-type": "multipart/form-data",
            },
        };
        const url = "http://localhost:5000/upload";
        const response = await axios.post(url, formData, config);
        setData(response.data);
        setFlag(true);
        setIsLoading(false)
        navigate('/detection')
    }

    const onInputChange = (event) => {
        setFile(event.target.files[0]);
    }
    return (
        <>
            <Header loginStatus={loginStatus} setLoginStatus={setLoginStatus} />
            {isLoading ? <Loader style={{ width: "100px", height: "100px", margin: "auto", minHeight: "400px" }} /> :
                (flag === true ? <Result data={data} setFlag={setFlag} /> : < section className="text-gray-600 body-font relative" >
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-col text-center w-full mb-12">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Plant Disease Detection and Prevention</h1>
                            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p>
                        </div>
                        <div className="lg:w-1/2 md:w-2/3 mx-auto">
                            <div className="flex flex-wrap -m-2">
                                <div className="p-2 w-full">
                                    <div className="relative">
                                        <label for="message" className="leading-7 text-sm text-gray-600">Message</label>
                                        <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <form onSubmit={onFormSubmit}>
                                        <input type={'file'} name="photo" onChange={onInputChange}></input>
                                        <button type='submit' className="flex mx-auto text-white bg-indigo-500 border-0 px-6 m-10 py-2 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section >)
            }
            <Footer />
        </>
    );
}