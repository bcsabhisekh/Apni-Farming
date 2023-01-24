import React from "react";
import img from "../components/images/main_logo.png";
import { Link, useNavigate } from "react-router-dom";
export default function Header({ loginStatus, setLoginStatus }) {

    const navigate = useNavigate();

    return (
        <div>
            <header className="text-gray-900 body-font">
                <div className="container z-50 border-b-2 shadow-md  mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <img src={img} alt="" width="40px" height="40px"/>
                        {/* <svg xmlns={img} fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-green-500 rounded-full" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg> */}
                        <span className="ml-3 text-xl">Apni Farming</span>
                    </a>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <Link to="/" className="mr-5 hover:text-gray-900 cursor-pointer cursor: pointer;"  >Home</Link>
                        <Link to="/detection" className="mr-5 hover:text-gray-900 cursor-pointer cursor: pointer;"  >Crop</Link>
                        <Link to="/table" className="mr-5 hover:text-gray-900 cursor-pointer cursor: pointer;"  >Add</Link>
                        <Link to="/cattle" className="mr-5 hover:text-gray-900 cursor-pointer cursor: pointer;"  >Cattle</Link>
                        <Link to="/graph" className="mr-5 hover:text-gray-900 cursor-pointer cursor: pointer;"  >Records</Link>
                        {Object.keys(loginStatus).length > 0 ?
                            <div>
                                <div className="inline-flex overflow-hidden relative justify-center items-center w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600">
                                    <span className="font-medium text-gray-900 dark:text-gray-300">{loginStatus.name[0].toUpperCase()}</span>
                                </div>
                                <button onClick={() => { setLoginStatus({}); navigate("/"); }} className="btn btn-sm ml-3">Log Out
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </button>
                            </div>
                            : <Link to="/login">
                                <button className="btn btn-info btn-sm">Log In
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </button>
                            </Link>}
                    </nav>
                </div>
            </header >
        </div >
    );
}