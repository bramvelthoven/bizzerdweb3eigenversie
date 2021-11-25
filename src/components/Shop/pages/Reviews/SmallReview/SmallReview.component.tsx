import React, { Component } from 'react'
import './SmallReview.scss'
import tiltedPhone from "../../../../../assets/img/tiltedPhone.png";
import jll from "../../../../../assets/img/jll.png";
import Button from "../../../../common/Button/Button.component";
export default class SmallReview extends Component {



    render() : JSX.Element {
        return (
            <div className="smallReviewContainer">
            <div className="SmallReview">
                <div className="leftSection">
                    <img className="logo" src={jll} alt="icoon voor bedrijf"/>
                    <p className="quote">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Adipiscing commodo elit at imperdiet dui accumsan sit amet nulla.
                    </p>
                    <p>- Naam van de persoon die het schreef, en het bedrijf</p>
                    <button className="SmallReviewButton">Start nu ook </button>
                </div>

            </div>
        <div className="rightSectionReview">
            <img className="phoneSmallReview" src={tiltedPhone} alt="gekantelde telefoon"/>
        </div>
            </div>

        )
    }

}
