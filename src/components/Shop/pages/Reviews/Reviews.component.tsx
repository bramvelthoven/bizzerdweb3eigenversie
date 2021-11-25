import React, { Component } from 'react'
import NavBar from "../../common/NavBar/NavBar.component";
import ToolBar from "../../common/ToolBar/ToolBar.component";
import BulletPoints from "../../common/BulletPoints/BulletPoints.component";
import SEOText from "../../common/SEOText/SEOText.component";
import BottomBar from "../../common/BottomBar/BottomBar.component";
import ReviewYoutubeBlock from "../../common/ReviewYoutubeBlock/ReviewYoutubeBlock.component";
import LargeReview from "./LargeReview/LargeReview.component";
import SmallReview from "./SmallReview/SmallReview.component";

import './reviews.scss'
import PageTitle from "../../common/PageTitle/PageTitle.component";

export default class Reviews extends Component{


    render() : JSX.Element {
        return (
            <>
                <ToolBar/>
                <NavBar/>
                <BulletPoints/>
                <PageTitle
                    title={'Recenties'}
                    subTitle={'Zo beoordelen klanten bizzerd. Lees hun ervaringen.'}
                />
                <LargeReview/>
                <div className="smallReviewRow">
                    <SmallReview/>
                    <SmallReview/>
                </div>
                <ReviewYoutubeBlock/>
                <LargeReview/>
                <div className="smallReviewRow">
                    <SmallReview/>
                    <SmallReview/>
                </div>
                <SEOText/>
                <BottomBar/>
            </>
        )
    }

}
