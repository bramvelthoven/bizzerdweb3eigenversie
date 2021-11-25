import React, { Component } from 'react'
import './shop.scss'
import Home from "./pages/Home/Home.component";
import {Route, Switch} from "react-router-dom";
import Reviews from "./pages/Reviews/Reviews.component";
import PaymentPlans from "./pages/PaymentPlans/PaymentPlans.component";
import Businesscards from "./pages/Businesscards/Businesscards.component";
import Method from "./pages/Method/Method.component";
import Contact from "./pages/Contact/Contact.component";
import Detail from "./pages/Detail/Detail.component";

type shopProps = {

}


export default class Shop extends Component<shopProps>{

   

    render() : JSX.Element {
        return (
            <div className="shopContainer">
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route path="/reviews">
                        <Reviews/>
                    </Route>
                    <Route path="/payment-plans">
                        <PaymentPlans/>
                    </Route>
                    <Route path="/business-cards">
                        <Businesscards/>
                    </Route>
                    <Route path='/detail'>
                        <Detail/>
                    </Route>
                    <Route path="/method">
                        <Method/>
                    </Route>
                    <Route path="/contact">
                        <Contact/>
                    </Route>

                </Switch>



            </div>
        )
    }

}
