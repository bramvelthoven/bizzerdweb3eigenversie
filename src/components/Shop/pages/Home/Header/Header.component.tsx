import React, { Component } from 'react'
import './header.scss'
import tiltedPhone from '../../../../../assets/img/tiltedPhone.png'
import Button from '../../../../common/Button/Button.component';

export default class Header extends Component{



    render() : JSX.Element {
        return (
            <div className="header">
                <div className="headerLeft">

                    <div className="priceInformation">Standaard <span className="underlined">maximum</span> prijs van: <span className="whiteText">€ 0,99</span> p.p.m.</div>

                    <h1 className="headerTitle">Digital, paperless business card</h1>
                    <h3 className="headerSubtitle">Contactless. Practical. Sustainable.</h3>
                    <Button className="headerButton">Start hier</Button>
                </div>
                <div className="headerRight">
                    <img className="phone phone1" src={tiltedPhone} alt="gekantelde telefoon"/>
                    <img className="phone phone2" src={tiltedPhone} alt="gekantelde telefoon"/>
                    <img className="phone phone3" src={tiltedPhone} alt="gekantelde telefoon"/>
                </div>

            </div>
        )
    }

}
