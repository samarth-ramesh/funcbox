import React from 'react';
import LandingPage from "./LandingPage/LandingPage";
import {BrowserRouter as Router, Route, Switch,} from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Order from "./OrderPage/Order";
import Payment from "./PaymentPage/Payment";

function App() {
    return (
        <Router>
            <Header/>
            <Switch>
                <Route exact path={"/order"}><Order/></Route>
                <Route exact path={"/pay"}><Payment/></Route>
                <Route exact path={"/"}><LandingPage/></Route>
            </Switch>
            <Footer/>
        </Router>
    );
}

export default App;