import React, { Component } from 'react'
import { ICON_COLOR } from '../../../../../constants';
import BlocksIcon from '../../../../common/Icons/Blocks/Blocks.component';
import SearchIcon from '../../../../common/Icons/Search/SearchIcon.component';
import UploadIcon from '../../../../common/Icons/Upload/Upload.icon';
import "./actionbuttons.scss";
import EyeIcon from "../../../../common/Icons/Eye/Eye.icon";
import LetUsDesignIcon from "../../../../common/Icons/LetUsDesign/LetUsDesign.icon";
export default class ActionButtons extends Component{



    render() : JSX.Element {
        return (
            <div className="actionButtons">
                <div className="row-actionButton">
                <div className="actionButton-3">
                    <h4>Bekijk de ontwerpen</h4>
                    <div className="bigIconContainer searchIcon">
                        <EyeIcon additionalClass={'eyeIcon'} color={ICON_COLOR}/>
                    </div>
                </div>
                <div className="actionButton-3">
                    <h4>Upload je eigen ontwerp</h4>
                    <div className="bigIconContainer">
                        <UploadIcon additionalClass={'uploadIcon'} color={ICON_COLOR}/>
                    </div>

                </div>
                <div className="actionButton-3">
                    <h4>Laat ons jouw card ontwerpen</h4>
                    <div className="bigIconContainer">
                        <LetUsDesignIcon additionalClass={'uploadIcon'} color={ICON_COLOR}/>
                    </div>
                </div>
                </div>
            </div>
        )
    }

}
