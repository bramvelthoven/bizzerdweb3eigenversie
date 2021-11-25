import React, { Component } from 'react'
import NavBar from "../../common/NavBar/NavBar.component";
import ToolBar from "../../common/ToolBar/ToolBar.component";
import BulletPoints from "../../common/BulletPoints/BulletPoints.component";
import SEOText from "../../common/SEOText/SEOText.component";
import BottomBar from "../../common/BottomBar/BottomBar.component";

import './method.scss'
import PageTitle from "../../common/PageTitle/PageTitle.component";

export default class Method extends Component{


    render() : JSX.Element {
        return (
            <>
                <ToolBar/>
                <NavBar/>
                <BulletPoints/>
                <PageTitle
                    title={'Werkwijze'}
                    subTitle={'Een stappenplan ofzo?'}
                />
                <SEOText/>
                <BottomBar/>
            </>
        )
    }

}
