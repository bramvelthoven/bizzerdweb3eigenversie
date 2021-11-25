import React, { Component } from 'react'
import ToolBar from "../../common/ToolBar/ToolBar.component";
import NavBar from "../../common/NavBar/NavBar.component";
import Header from "./Header/Header.component";
import BulletPoints from "../../common/BulletPoints/BulletPoints.component";
import ActionButtons from "./ActionButtons/ActionButtons.component";
import OurCustomers from "./OurCustomers/OurCustomers.component";
import StatisticsBlock from "./StatisticsBlock/StatisticsBlock.component";
import BottomBar from "../../common/BottomBar/BottomBar.component";
import PopularDesigns from "./PopularDesigns/PopularDesigns.component";
import ReviewYoutubeBlock from "../../common/ReviewYoutubeBlock/ReviewYoutubeBlock.component";
import BizzerdCommunityBlock from "./BizzerdCommunityBlock/BizzerdCommunityBlock.component";
import SEOText from "../../common/SEOText/SEOText.component";




export default class Home extends Component{


    render() : JSX.Element {
        return (
            <>
                <ToolBar/>
                <NavBar/>
                <BulletPoints/>
                <Header/>
                <ActionButtons/>
                <PopularDesigns/>
                <ReviewYoutubeBlock/>
                <OurCustomers/>
                <StatisticsBlock/>
                <BizzerdCommunityBlock/>
                <SEOText/>
                <BottomBar/>
            </>
        )
    }

}
