import React, { Component } from 'react'
import './toolbar.scss'
import LocaleSelector from "./LocaleSelector/LocaleSelector.component";
import SearchBar from "./SearchBar/SearchBar.component";
import bizzerdLogo from '../../../../assets/img/bizzerd_logo.png';
import { ICON_COLOR } from '../../../../constants';
import UserIcon from '../../../common/Icons/User/User.icon';
import Headphones from '../../../common/Icons/Headphones/Headphones.icon';
import ShoppingCart from '../../../common/Icons/ShoppingCart/ShoppingCart.icon';
export default class ToolBar extends Component{


    render() : JSX.Element {
        return (
            <div className="toolbarContainer">
                <div className="logoSection">
                    <img src={bizzerdLogo} className="logo" alt="Bizzerd logo"/>
                </div>
                <div className="searchbarSection">
                  <SearchBar/>
                </div>
                <div className="rightSection">
                    <div className="toolbarItem">
                        <LocaleSelector/>
                    </div>
                    <div className="toolbarItem">
                        <div className="toolbarIcon"><ShoppingCart  color={ICON_COLOR}/> </div>
                        Winkelmandje
                    </div>
                    <div className="toolbarItem">
                        <div className="toolbarIcon"><UserIcon color={ICON_COLOR}/> </div>
                        Inloggen
                    </div>

                </div>
            </div>
        )
    }

}
