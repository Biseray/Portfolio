import React from "react";
import { Outlet } from "react-router";
import Navigation from "./Navigation";
import Loader from "./Loader";
import Footer from "./Footer";
import { useState, useEffect } from "react";

function BaseLayout() {
    const [loader, setLoader] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoader(false);  
        }, 3000 )
    },[])
    return (
        <>
            <Navigation />
            <main>
                {loader ? (
                    <Loader />
                ) : (
                    <>
                        <Outlet />
                        <Footer />
                    </>
                )}
            </main>
        </>
    );
}

export default BaseLayout;