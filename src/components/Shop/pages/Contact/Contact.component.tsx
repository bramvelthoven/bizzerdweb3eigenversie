import React, { Component } from 'react'
import NavBar from "../../common/NavBar/NavBar.component";
import ToolBar from "../../common/ToolBar/ToolBar.component";
import BulletPoints from "../../common/BulletPoints/BulletPoints.component";
import SEOText from "../../common/SEOText/SEOText.component";
import BottomBar from "../../common/BottomBar/BottomBar.component";

import './contact.scss'
import PageTitle from "../../common/PageTitle/PageTitle.component";
import ContactForm from "./ContactForm/ContactForm.component";
import FAQ from "./FAQ/Faq.component";

export default class Contact extends Component{


    render() : JSX.Element {
        return (
            <>
                <ToolBar/>
                <NavBar/>
                <BulletPoints/>
                <PageTitle
                    title={'Contact'}
                    subTitle={'Voor vragen, offerte-aanvragen of support, vul onderstaand'}
                />
                <ContactForm/>
                <FAQ/>
                <SEOText/>
                <BottomBar/>
            </>
        )
    }

}
