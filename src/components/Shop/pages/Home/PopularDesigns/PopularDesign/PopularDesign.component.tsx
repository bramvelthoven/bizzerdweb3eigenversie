import React, { Component } from 'react'
import './populardesign.scss'
import designImage from '../../../../../../assets/img/designimage.jpg'
export default class PopularDesign extends Component {



    render() : JSX.Element {
        return (
            <div className="popularDesign">
                <div className="designImageContainer">
                    <img src={designImage}/>
                    <p className="designTitle">titel</p>
                    <p className="designDescription">Digitale visitekaartjes</p>
                    <p className="designPrice"><span className="primaryColor">€ 1.26</span> p.m.</p>
                </div>
            </div>
        )
    }

}