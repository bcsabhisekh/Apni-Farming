import React from "react";
import { useNavigate } from "react-router-dom";
export default function Result(props) {
    function Display({ item }) {
        return (<div className="container px-5 py-10 mx-auto">
            <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
                <h1 className="sm:text-2xl text-xl font-medium title-font mb-2 text-gray-900">{item.name}</h1>
                <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">{item.description}</p>
            </div>
            <div className="flex flex-wrap -m-4">
                <div className="xl:w-1/3 md:w-1/2 p-4">
                    <div className="border border-gray-200 p-6 rounded-lg">
                        <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                                <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"></path>
                            </svg>
                        </div>
                        <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Biological Treatment</h2>
                        <ul>
                            {item.biological && item.biological.map((data, index) => {
                                return (<li key={index}>{data}</li>);
                            })}
                        </ul>
                    </div>
                </div>
                <div className="xl:w-1/3 md:w-1/2 p-4">
                    <div className="border border-gray-200 p-6 rounded-lg">
                        <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                                <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"></path>
                            </svg>
                        </div>
                        <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Chemical Treatment</h2>
                        <ul>
                            {item.chemical && item.chemical.map((data, index) => {
                                return (<li key={index}>{data}</li>);
                            })}
                        </ul>
                    </div>
                </div>
                <div className="xl:w-1/3 md:w-1/2 p-4">
                    <div className="border border-gray-200 p-6 rounded-lg">
                        <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                                <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"></path>
                            </svg>
                        </div>
                        <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Prevention</h2>
                        <ul>
                            {item.prevention && item.prevention.map((data, index) => {
                                return (<li key={index}>{data}</li>);
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>);
    }

    const navigate = useNavigate();
    let record = props.data.record;
    const url = props.data.url;
    return (
        <section className="text-gray-900 body-font">
            <div className="container mx-auto flex px-5 py-10 items-center justify-center flex-col">
                <div className="text-center lg:w-2/3 w-full">
                    <h2 className="title-font sm:text-3xl text-3xl mb-4 font-medium text-gray-900">Given Crop Image is Infected with below listed Microorganisms.</h2>
                </div>
                <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-1 mt-5 object-cover object-center rounded" alt="hero" src={url} />
            </div>
            {record.map(row => <Display item={row} />)}
            <div className="container px-1 py-0 mx-auto">
                <button className="flex mx-auto text-white bg-green-500 border-0 px-6 my-20 py-1 focus:outline-none hover:bg-green-600 rounded text-lg" onClick={() => { props.setFlag(false); navigate("/detection"); }}>Back</button>
            </div>
        </section>
    );
}