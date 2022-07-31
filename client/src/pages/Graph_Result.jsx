import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PieChart, Pie, Legend, Tooltip } from "recharts";



export default function Graph_Result(props) {
    const navigate = useNavigate();
    const data = props.custom_data && props.custom_data.map((item) => {
        return ({ name: item.name, profit: item.profit });
    });

    function Display(item) {
        return (
            <>
                <div class="flex flex-wrap w-full mb-10 flex-col items-center text-center">
                    <h1 class="sm:text-2xl font-medium title-font mb-2 text-gray-900">{item.name}</h1>
                </div>
                <div class="flex flex-wrap -m-4 mb-4">
                    <div class="xl:w-1/3 md:w-1/2 p-4">
                        <div class="border border-gray-200 p-6 rounded-lg">
                            <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                                    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"></path>
                                </svg>
                            </div>
                            <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Weather Details</h2>
                            <p class="leading-relaxed text-base">{item.weather}</p>
                        </div>
                    </div>
                    <div class="xl:w-1/3 md:w-1/2 p-4">
                        <div class="border border-gray-200 p-6 rounded-lg">
                            <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                                    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
                                </svg>
                            </div>
                            <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Seed Details</h2>
                            <p class="leading-relaxed text-base">{item.seed}</p>
                        </div>
                    </div>
                    <div class="xl:w-1/3 md:w-1/2 p-4">
                        <div class="border border-gray-200 p-6 rounded-lg">
                            <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                </svg>
                            </div>
                            <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Used Fertilizers</h2>
                            <p class="leading-relaxed text-base">{item.fertilizer}</p>
                        </div>
                    </div>
                </div>
            </>
        );
    }

    return (
        <section class="text-gray-600 body-font">
            <div class="container mx-auto flex px-5 py-10 items-center justify-center flex-col">
                <h1 class="title-font sm:text-2xl mb-8 font-medium text-gray-900">Details of Crop Production - {props.year}</h1>
                <PieChart width={1000} height={400}>
                    <Pie
                        dataKey="profit"
                        isAnimationActive={false}
                        data={data}
                        cx={500}
                        cy={200}
                        outerRadius={150}
                        fill="#00e673"
                        label
                    />
                    <Tooltip />
                </PieChart>
                <div class="container px-5 py-10 mx-auto">
                {props.custom_data && props.custom_data.map((item) => <Display name={item.name} weather={item.weather} seed={item.seed} fertilizer={item.fertilizer} />)}
                    <button class="flex mx-auto text-white bg-indigo-500 border-0 px-6 my-20 py-1 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={() => { props.setCustomData([]); props.setFlag(false); navigate("/graph"); }}>Back</button>
                </div>
            </div>
        </section>
    )
}