import Header from "../Header/Header";
import P1 from "./p1/P1";
import P2 from "./p2/P2";
import P3 from "./p3/P3";
import P4 from "./p4/P4";
import Footer from "../Footer/Footer";
import React from "react";

function LandingPage() {
    return (
        <div>
            <Header/>
            <P1/>
            <P2/>
            <P3/>
            <P4/>
            <Footer/>
        </div>
    )
}

export default LandingPage