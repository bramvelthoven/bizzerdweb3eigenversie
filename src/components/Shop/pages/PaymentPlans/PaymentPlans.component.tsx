import React, { Component } from 'react'
import NavBar from "../../common/NavBar/NavBar.component";
import ToolBar from "../../common/ToolBar/ToolBar.component";
import BulletPoints from "../../common/BulletPoints/BulletPoints.component";
import SEOText from "../../common/SEOText/SEOText.component";
import BottomBar from "../../common/BottomBar/BottomBar.component";

import './paymentPlans.scss'
import PageTitle from "../../common/PageTitle/PageTitle.component";
import PaymentPlan from "./PaymentPlan/PaymentPlan.component";
import Button from "../../../common/Button/Button.component";

export default class PaymentPlans extends Component{

    paymentPlan1Features: JSX.Element[] = [
        <p><b>Eigen</b> ontwerpen</p>,
        <p><b>Meerdere</b> ontwerpen </p>,
        <p><b>Centraal</b> beheer</p>
    ];
    paymentPlan2Features: JSX.Element[] = [
        ...this.paymentPlan1Features,
        <p><b>Support</b> en <b>ondersteuning</b></p>
    ];
    paymentPlan3Features: JSX.Element[] = [
        ...this.paymentPlan2Features,
        <p><b>Begeleiding</b> bij implementatie</p>,
    ]
    render() : JSX.Element {
        return (
            <>
                <ToolBar/>
                <NavBar/>
                <BulletPoints/>
                <PageTitle
                    title={'Prijzen'}
                    subTitle={'Bepaal zelf wat je betaalt. Alle prijzen zijn excl. btw.'}
                />
                <div className="paymentPlansRow">
                    <PaymentPlan name='Bizzerd voor ZZP' priceText='€ 0,99' features={this.paymentPlan1Features} perUser={true} buttonText={'Start nu'}/>
                    <PaymentPlan name='Bizzerd voor MKB' priceText='€ 0.79 - 0,59&nbsp;' features={this.paymentPlan2Features} perUser={true} buttonText={'Start nu'}/>
                    <PaymentPlan name='Bizzerd op maat MKB & Enterprise' priceText='Op aanvraag&nbsp;' features={this.paymentPlan3Features} perUser={false} buttonText={'Neem contact op'}/>
                </div>
                <Button className={'centerButton'}> Volledig prijzen schema </Button>
                <SEOText/>
                <BottomBar/>
            </>
        )
    }

}
