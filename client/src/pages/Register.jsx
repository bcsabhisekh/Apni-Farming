import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Register({ loginStatus, setLoginStatus }) {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        name: "",
        email: "",
        dob: "",
        gender: "Select",
        password: "",
        repassword: ""
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
        const { name, email, dob, gender, password, repassword } = user;
        if (name && email && dob && gender !== "Select" && password && password === repassword) {
            try {
                const response = await axios.post("http://localhost:5000/register", user);
                alert(response.data.message);
                navigate("/login");
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
                    <div className="flex flex-col text-center w-full mb-4">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Sign Up</h1>
                    </div>
                    <div className="lg:w-1/2 md:w-2/3 mx-auto">
                        <form onSubmit={onFormSubmit}>
                            <div className="flex flex-wrap -m-2">
                                <div className="p-2 w-full">
                                    <div className="relative">
                                        <label for="name" className="leading-7 text-sm text-gray-900">Name</label>
                                        <input type="text" onChange={handleChange} value={user.name} autocomplete="off" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <div className="relative">
                                        <label for="email" className="leading-7 text-sm text-gray-900">Email</label>
                                        <input type="email" onChange={handleChange} value={user.email} autocomplete="off" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <div className="relative">
                                        <label for="dob" className="leading-7 text-sm text-gray-900">DOB</label>
                                        <input type="date" onChange={handleChange} value={user.dob} autocomplete="off" id="dob" name="dob" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <div className="relative">
                                        <label for="full-name" className="leading-9 text-sm text-gray-900">Gender</label>
                                        <select onChange={handleChange} value={user.gender} name="gender" className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                            <option value="Select">Select</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                            <option value="Others">Others</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <div className="relative">
                                        <label for="name" className="leading-7 text-sm text-gray-900">Enter Password</label>
                                        <input type="password" onChange={handleChange} value={user.password} autocomplete="off" id="name" name="password" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <div className="relative">
                                        <label for="name" className="leading-7 text-sm text-gray-900">Re-enter Password</label>
                                        <input type="password" onChange={handleChange} value={user.repassword} autocomplete="off" id="name" name="repassword" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div className="p-6 w-full">
                                    <div className="text-center">
                                    <button type="submit" className="btn btn-sm btn-accent">Sign Up</button>
                                    </div>
                                    <div className="flex flex-col text-center w-full mb-12 pt-2">
                                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Already Regsitered? <Link to="/login" className="text-blue-600 cursor-pointer cursor: pointer;">Log In</Link>  </p>
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