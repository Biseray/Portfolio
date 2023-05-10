import React from "react";
import { Outlet } from "react-router";
import Navigation from "./Navigation";

import Footer from "./Footer";


function BaseLayout() {
    return (
        <>
            <Navigation />
           
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </>
    )
}

export default BaseLayout;