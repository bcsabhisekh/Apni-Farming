import { React, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cattle_Result from "./Cattle_Result";

export default function Cattle({ loginStatus, setLoginStatus }) {
    const [symptom, setSymptom] = useState();
    const [data, setData] = useState({});

    const navigate = useNavigate();

    const onFormSubmit = async (e) => {
        e.preventDefault();
        if (symptom && symptom != "Select") {
            try {
                const response = await axios.get(`http://localhost:5000/getdisease/${symptom}`);
                setData(response.data);
                navigate("/cattle");
            } catch (err) {
                console.log(err);
            }
        }
        else {
            alert("Please Select an Option");
        }
    }

    const handleChange = (e) => {
        setSymptom(e.target.value)
    }

    return (
        <>
            <Header loginStatus={loginStatus} setLoginStatus={setLoginStatus} />
            {Object.keys(data).length === 0 && data.constructor === Object ? <section className="text-gray-900 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Cattle Disease Detection on the Basis of Observed Symptoms</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Please select one of the below symptoms based on your cattle behaviour to know its cause, prevention and treatment.</p>
                    </div>
                    <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
                        <div className="relative flex-grow w-full">
                            <form onSubmit={onFormSubmit}>
                                <label for="full-name" className="leading-9 text-sm text-gray-900">Choose Symptoms</label>
                                <select value={symptom} onChange={handleChange} className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                    <option value="Select">Select</option>
                                    <option value="Fever, Anemia, Weight Loss">Fever, Anemia, Weight Loss</option>
                                    <option value="Reduced Milk Yield">Reduced Milk Yield</option>
                                    <option value="Fiat">Difficulty Breathing</option>
                                    <option value="Ford">Fever (106-108°F)</option>
                                    <option value="Volvo">Recumbency (prostration)</option>
                                    <option value="Fiat">Change in Normal Behaviour</option>
                                    <option value="Ford">Nasal Discharge</option>
                                    <option value="Volvo">Swelling of Head and Neck</option>
                                </select>
                                <button type='submit' className="flex mx-auto text-white bg-green-500 border-0 px-3 m-10 py-1 focus:outline-none hover:bg-green-600 rounded text-lg">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section> : <Cattle_Result title={data.title} cause={data.cause} treatment={data.treatment} prevention={data.prevention} setData={setData} />}
            <Footer />
        </>
    )
}