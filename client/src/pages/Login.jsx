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
            <section class="text-gray-600 body-font relative">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-col text-center w-full mb-8">
                        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Log In</h1>
                    </div>
                    <div class="lg:w-1/2 md:w-2/3 mx-auto">
                        <form onSubmit={onFormSubmit}>
                            <div class="flex flex-wrap -m-2">
                                <div class="p-2 w-full">
                                    <div class="relative">
                                        <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
                                        <input type="email" autocomplete="off" value={user.email} onChange={handleChange} id="email" name="email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div class="p-2 w-full">
                                    <div class="relative">
                                        <label for="password" class="leading-7 text-sm text-gray-600">Password</label>
                                        <input type="password" autocomplete="off" id="password" onChange={handleChange} value={user.password} name="password" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div class="p-6 w-full">
                                    <button type="submit" class="flex mx-auto text-white bg-indigo-500 border-0 py-1 px-4 focus:outline-none hover:bg-indigo-600 rounded text-lg">Log In</button>
                                    <div class="flex flex-col text-center w-full mb-12 pt-2">
                                        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Haven't any account? <Link to="/register" class="text-blue-600 cursor-pointer cursor: pointer;">Sign Up</Link>  </p>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}