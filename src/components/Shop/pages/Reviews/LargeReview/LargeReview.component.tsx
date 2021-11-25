import React, { Component } from 'react'
import './LargeReview.scss'

import tiltedPhone from "../../../../../assets/img/tiltedPhone.png";
import jll from "../../../../../assets/img/jll.png";
import Button from "../../../../common/Button/Button.component";
export default class LargeReview extends Component {



    render() : JSX.Element {
        return (
            <div className="LargeReview">
                <div className="largeReviewText">
                    <h1>JLL Belgie</h1>
                    <p className="quote">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Adipiscing commodo elit at imperdiet dui accumsan sit amet nulla. Consequat ac felis donec et. Tellus elementum sagittis vitae et leo duis ut diam.
                        Tempor id eu nisl nunc mi ipsum faucibus. Tellus molestie nunc non blandit massa enim. Adipiscing tristique risus nec feugiat in fermentum."
                    </p>
                    <p>- Naam van de persoon die het schreef, en het bedrijf</p>
                </div>
                <img className="phone" src={tiltedPhone} alt="gekantelde telefoon"/>
                <div className="LargeReviewRightSection">
                    <img className="img" src={jll} alt="icoon voor bedrijf"/>
                <div className="LargeReviewButton">Start nu ook</div>
                
                </div>
            </div>

        )
    }

}
