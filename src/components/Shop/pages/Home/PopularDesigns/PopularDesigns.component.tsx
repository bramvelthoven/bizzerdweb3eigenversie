import React, { Component } from 'react'
import './populardesigns.scss'
import PopularDesign from "./PopularDesign/PopularDesign.component";
import Button from "../../../../common/Button/Button.component";
export default class PopularDesigns extends Component {



    render() : JSX.Element {
        return (
            <div className="popularDesigns">
                <div className="popularDesignsTitle">
                        <div className="line"/>
                        <div className="textbox">
                            <div className="text">Populaire designs</div>
                        </div>
                </div>
                <div className="popularDesignsFlexContainer">
                    <PopularDesign/>
                    <PopularDesign/>
                    <PopularDesign/>
                </div>

                <div className="startDesigning">
                    <div className="line"/>
                    <div className="textbox">
                        <Button className="lineButton">Kies een ontwerp en begin!</Button>
                    </div>
                </div>
            </div>
        )
    }

}
