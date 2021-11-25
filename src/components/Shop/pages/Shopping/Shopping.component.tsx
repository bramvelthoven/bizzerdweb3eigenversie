import React, { Component } from 'react'
import ToolBar from "../../common/ToolBar/ToolBar.component";
import NavBar from "../../common/NavBar/NavBar.component";
import BottomBar from '../../common/BottomBar/BottomBar.component';
import ShopItems from './ShopItems/ShopItems.component';
import Filters from "./Filters/Filters.component";
import './shopping.scss';
import BulletPoints from "../../common/BulletPoints/BulletPoints.component";
import {useInjection} from "../../../../reactBinding";
import { ShopStateService } from '../../../../services/StateManagement/ShopState.service';
type shopProps = {

}

 const Shopping:React.FC = () => {


    const shopStateService: ShopStateService = useInjection(ShopStateService);



    return (
        <>
            <ToolBar/>
            <NavBar/>
            <BulletPoints/>
            <div className="content">
                <div className="sidebar">
                    <Filters/>
                </div>
                <div className="main">
                    <ShopItems/>
                </div>

            </div>

            <BottomBar/>
        </>
    )
    }
export default Shopping