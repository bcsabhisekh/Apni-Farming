import React from "react";
import { Link } from "react-router-dom";
import professor from "./images/professor.png";
import student from "./images/student.png";
export default function Body({ loginStatus, setLoginStatus }) {

    function Option() {
        return (<div className="flex justify-center">
            <Link to="/register" ><button className="btn btn-sm btn-accent mr-5">Sign Up</button></Link>
            <Link to="/login" ><button className="btn btn-sm btn-info">Log In</button></Link>
        </div >);
    }

    return (
        <>
            <section className="text-gray-900 body-font font-sans">
                <div className="container mx-auto flex px-5 py-16 md:flex-row flex-col items-center">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <img className="object-cover object-center rounded" alt="hero" src="https://media.istockphoto.com/photos/smart-agriculture-tablet-in-the-field-with-weather-machinery-crops-picture-id1149604918?k=20&m=1149604918&s=612x612&w=0&h=D8jqF441SCqZHmCYGe3OriuymTRKm7b5EbBXzz8DqPw=" />
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Apni Farming 
                            <br className="hidden lg:inline-block" /><p className="sm:text-2xl text-xl">A Modern Approach for Monitoring and Maintainance.</p>
                        </h1>
                        <p className="mb-8 leading-relaxed text-gray-900">A multipurpose platform which helps farmers to maximise their crop yield by preventing them from various diseases like a farmer will be able to know from which disease their crops are infected. Farmer can also get information about their cattle's possible diseases if they show unusual behaviour. The last is a personalised data record of crops for decision-making in future harvesting and knowledge of profit obtained on their yield per year.</p>
                        {Object.keys(loginStatus).length == 0 ? <Option /> : null}
                    </div>
                </div>
            </section>
            <section className="text-gray-900 body-font">
                <div className="container px-5 py-24 mx-auto flex flex-wrap">
                    <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
                        <img alt="feature" className="object-cover object-center h-full w-full" src="https://www.mdpi.com/agriculture/agriculture-11-00461/article_deploy/html/images/agriculture-11-00461-g001.png" />
                    </div>
                    <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
                        <div className="flex flex-col mb-10 lg:items-start items-center">
                            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-5">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                </svg>
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Crop Disease Detection</h2>
                                <p className="leading-relaxed text-base">This section will take the image as input and detect whether the given crop image is infected with any diseases or not. If it is infected, it will show all details related to disease and prevention.</p>
                                <Link to="/detection" className="mt-3 text-indigo-700 inline-flex items-center"><button class="btn btn-link">Explore</button>
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                        <div className="flex flex-col mb-10 lg:items-start items-center">
                            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-5">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                                    <circle cx="6" cy="6" r="3"></circle>
                                    <circle cx="6" cy="18" r="3"></circle>
                                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                                </svg>
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Previous Year Crops Record</h2>
                                <p className="leading-relaxed text-base">This section will store all the details of the obtained crop in any particular year. Like, its weather condition, fertilizers used, output, etc.To use this functionality, you must have a valid account on this portal and logging in is necessary.</p>
                                <Link to="/graph" className="mt-3 text-indigo-700 inline-flex items-center"><button class="btn btn-link">Explore</button>
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                        <div className="flex flex-col mb-10 lg:items-start items-center">
                            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-5">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Cattle Disease Detection</h2>
                                <p className="leading-relaxed text-base">This section will display information about cattle diseases based on their observed symptoms.</p>
                                <Link to="/cattle" className="mt-3 text-indigo-700 inline-flex items-center"><button class="btn btn-link">Explore</button>
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-15 mb-32 mx-auto">
                    <div class="flex flex-col text-center w-full mb-20">
                        <h1 class="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">ABOUT</h1>
                        <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-900">This model is part of my Summer Project at Atal Bihari Vajpayee Indian Institute of Information Technology and Management, Gwalior. I chose to build a model for two purposes: to help
                            farmers grow healthy crops and make better decisions based on previous records. I used machine
                            learning API for crop health monitoring, and for storing previous records, I used open source
                            tools, i.e. MERN Stack.</p>
                    </div>
                    <div class="flex flex-wrap -m-4">
                        <div class="p-4 lg:w-1/2">
                            <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                                <img alt="team" class="flex-shrink-0 rounded-lg w-28 h-28 object-cover object-center sm:mb-0 mb-4" src={professor} />
                                <div class="flex-grow sm:pl-8">
                                    <h2 class="title-font font-medium text-lg text-gray-900">Prof. Mahua Bhattacharya</h2>
                                    <h3 class="text-gray-900 mb-3">Prof. at IIIT Gwalior</h3>
                                    <p class="mb-4 text-gray-900">Her guidance and support helped me all the time to complete this project and learn new things.</p>
                                    <span class="inline-flex">
                                        <a class="text-gray-900">
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                            </svg>
                                        </a>
                                        <a class="ml-2 text-gray-900">
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                            </svg>
                                        </a>
                                        <a class="ml-2 text-gray-900">
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                            </svg>
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="p-4 lg:w-1/2">
                            <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                                <img alt="team" class="flex-shrink-0 rounded-lg w-24 h-24 object-cover object-center sm:mb-0 mb-4" src={student} />
                                <div class="flex-grow sm:pl-8">
                                    <h2 class="title-font font-medium text-lg text-gray-900">Abhisekh Yadav</h2>
                                    <h3 class="text-gray-900 mb-3">Student at IIIT Gwalior</h3>
                                    <p class="mb-4 text-gray-900">A pre-final student at the Indian Institute of Information Technology and Management Gwalior.</p>
                                    <span class="inline-flex">
                                        <a class="text-gray-900">
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                            </svg>
                                        </a>
                                        <a class="ml-2 text-gray-900">
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                            </svg>
                                        </a>
                                        <a class="ml-2 text-gray-900">
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                            </svg>
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}