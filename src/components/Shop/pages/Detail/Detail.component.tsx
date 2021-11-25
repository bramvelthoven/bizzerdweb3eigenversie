import React from "react";
import ToolBar from "../../common/ToolBar/ToolBar.component";
import NavBar from "../../common/NavBar/NavBar.component";
import BulletPoints from "../../common/BulletPoints/BulletPoints.component";
import './detail.scss'
import { Link } from "react-router-dom";
import BottomBar from "../../common/BottomBar/BottomBar.component";
import SlideShow from "./SlideShow/SlideShow.component";
import kaartjeDesktop from '../../../../assets/img/kaartje-desktop.png';
import kaartjeTelefoon from '../../../../assets/img/kaartje-telefoon.png';
const Detail:React.FC = () => {

    return <div>
        <ToolBar/>
        <NavBar/>
        <BulletPoints/>
        <div className="detail">
            <section className="preview">
                <SlideShow slides={[<img className='previewCard' src={kaartjeTelefoon}/>, <img src={kaartjeDesktop}/>]}/>
            </section>
            <section className="action">
                <div className="textbox">
                    <h2 className="title">Grote foto</h2>
                    <div className="priceTag"><span className="primaryColor"><b>€ 0.99</b></span> p.m.</div>

                <button className="actionButton">Bewerken</button>
                </div>
                <div className="priceInformation">
                    <p>Prijsinformatie bij hetzelfde ontwerp</p>
                    <table>
                        <tr>
                            <th><b>Gebruiksduur</b></th>
                            <th><b>Prijs p.m.</b></th>
                            <th><b>Korting</b></th>
                        </tr>
                        <tr>
                            <td>1 jaar</td>
                            <td>€ 0.99</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>2 jaar</td>
                            <td>€ 0.79</td>
                            <td>25%</td>
                        </tr>
                        <tr>
                            <td>3 jaar</td>
                            <td>€ 0.59</td>
                            <td>45%</td>
                        </tr>

                    </table>
                </div>
            </section>
        </div>
        <section className="productSEO">
            <h4>Omschrijving</h4>

            <span>Digitaal visitekaartje | bizzerd | ontwerp</span>

            <p>Hier komt dan een korte omschrijving met wat handige woorden voor
                google shopping en een linkje naar&nbsp;<Link to="/newflow/shop"> alle visitekaartjes</Link></p>
        </section>
        <BottomBar/>
    </div>
}
export default Detail