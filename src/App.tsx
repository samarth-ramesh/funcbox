import React from 'react';
import LandingPage from "./LandingPage/LandingPage";
import {BrowserRouter as Router, Route, Switch,} from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Order from "./OrderPage/Order";

function App() {
    return (
        <Router>
            <Header/>
            <Switch>
                <Route exact path={"/"}><LandingPage/></Route>
                <Route exact path={"/order"}><Order/></Route>
            </Switch>
            <Footer/>
        </Router>
    );
}

export default App;