import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Login({ loginStatus, setLoginStatus }) {


    const navigate = useNavigate();

    const [user, setUser] = useState({
        email: "",
        password: ""
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prev) => ({
            ...prev,
            [name]: value
        }));
    }


    const onFormSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = user;
        if (email && password) {
            try {
                const response = await axios.post("http://localhost:5000/login", user);
                setLoginStatus(response.data.user);
                console.log(response.data.message);
                alert(response.data.message);
                navigate("/");
            } catch (err) {
                throw new Error('Unable to get a token.')
            }
        }
        else {
            alert("Complete all the Input Fields");
        }
    }


    return (
        <>
            <Header loginStatus={loginStatus} setLoginStatus={setLoginStatus} />
            <section className="text-gray-900 body-font relative">
                <div className="container px-5 py-24 mx-auto">
                    <div className="border-2 rounded-xl">
                    <div className="flex flex-col text-center w-1/2 mx-auto mb-8 pt-4">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Log In</h1>
                    </div>
                    <div className="lg:w-1/2 md:w-2/3 mx-auto">
                        <form onSubmit={onFormSubmit}>
                            <div className="">
                                <div className="p-2 w-1/2 mx-auto">
                                    <div className="relative">
                                        <label for="email" className="leading-7 text-sm text-gray-900 block">Email</label>
                                        <input type="email" autocomplete="off" value={user.email} onChange={handleChange} id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div className="p-2 w-1/2 mx-auto">
                                    <div className="relative">
                                        <label for="password" className="leading-7 text-sm text-gray-900">Password</label>
                                        <input type="password" autocomplete="off" id="password" onChange={handleChange} value={user.password} name="password" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div className="p-6 w-1/2 mx-auto">
                                    <button type="submit" className="flex mx-auto text-white bg-green-500 border-0 py-1 px-3 focus:outline-none hover:bg-green-900 rounded text-lg">Log In</button>
                                    <div className="flex flex-col text-center w-full mb-12 pt-2">
                                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Haven't any account? <Link to="/register" className="text-blue-700 cursor-pointer cursor: pointer;">Sign Up</Link>  </p>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}