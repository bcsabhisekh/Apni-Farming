import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Body from "../components/Body";
export default function Home({ loginStatus, setLoginStatus }) {
    return (
        <div>
            <Header loginStatus={loginStatus} setLoginStatus={setLoginStatus} />
            <Body loginStatus={loginStatus} setLoginStatus={setLoginStatus} />
            <Footer />
        </div>
    )
}