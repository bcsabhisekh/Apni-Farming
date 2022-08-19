import React from "react";
import { Link, useNavigate } from "react-router-dom";
export default function Header({ loginStatus, setLoginStatus }) {

    const navigate = useNavigate();

    return (
        <div>
            <header class="text-gray-600 body-font">
                <div class="container z-50 border-b-2 shadow-md  mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        <span class="ml-3 text-xl">Digital Farming</span>
                    </a>
                    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <Link to="/" class="mr-5 hover:text-gray-900 cursor-pointer cursor: pointer;"  >Home</Link>
                        <Link to="/detection" class="mr-5 hover:text-gray-900 cursor-pointer cursor: pointer;"  >Detection</Link>
                        <Link to="/table" class="mr-5 hover:text-gray-900 cursor-pointer cursor: pointer;"  >Table</Link>
                        <Link to="/cattle" class="mr-5 hover:text-gray-900 cursor-pointer cursor: pointer;"  >Cattle</Link>
                        <Link to="/graph" class="mr-5 hover:text-gray-900 cursor-pointer cursor: pointer;"  >Graph</Link>
                        {Object.keys(loginStatus).length > 0 ?
                            <div>
                                <div class="inline-flex overflow-hidden relative justify-center items-center w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600">
                                    <span class="font-medium text-gray-600 dark:text-gray-300">{loginStatus.name[0].toUpperCase()}</span>
                                </div>
                                <button onClick={() => { setLoginStatus({}); navigate("/"); }} class="inline-flex items-center bg-gray-100 border-0 py-1 px-2 ml-4 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Log Out
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </button>
                            </div>
                            : <Link to="/login">
                                <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Log In
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
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