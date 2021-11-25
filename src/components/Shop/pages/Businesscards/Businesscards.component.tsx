import React, { Component } from 'react'
import NavBar from "../../common/NavBar/NavBar.component";
import ToolBar from "../../common/ToolBar/ToolBar.component";
import BulletPoints from "../../common/BulletPoints/BulletPoints.component";
import SEOText from "../../common/SEOText/SEOText.component";
import BottomBar from "../../common/BottomBar/BottomBar.component";

import './businesscards.scss'
import PageTitle from "../../common/PageTitle/PageTitle.component";
import Sidebar from "./Sidebar/Sidebar.component";
import CardPicker from "./CardPicker/CardPicker.component";

export default class Businesscards extends Component{


    render() : JSX.Element {
        return (
            <>
                <ToolBar/>
                <NavBar/>
                <BulletPoints/>

                <CardPicker/>
                <SEOText/>
                <BottomBar/>
            </>
        )
    }

}
