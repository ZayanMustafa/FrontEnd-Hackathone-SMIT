import Footer from "../components/footer";
import Navbar from "../components/navbar";
import React from "react";
export default function BasicPage() {
    return (
        <React.Fragment>
            <Navbar/>
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold text-center mt-10">Basic Page</h1>
                <p className="text-center mt-5">This is a basic page</p>
            </div>
            
            <Footer/>
        </React.Fragment>

    );
    }