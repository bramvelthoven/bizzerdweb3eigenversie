import React, { Component } from 'react'
import './bottombar.scss'
import LinkedinIcon from "../../../common/Icons/Linkedin/linkedin.icon";
import { ICON_COLOR } from '../../../../constants';
import FacebookIcon from "../../../common/Icons/Facebook/facebook.icon";
import InstagramIcon from "../../../common/Icons/Instagram/instagram.icon";
import TwitterIcon from "../../../common/Icons/Twitter/twitter.icon";
import PhoneIcon from "../../../common/Icons/Phone/Phone.icon";
import WhatsappIcon from "../../../common/Icons/Whatsapp/Whatsapp.icon";
import Location from "../../../common/Icons/Location/Location.icon";
export default class BottomBar extends Component{



    render() : JSX.Element {
        return (
            <div className="bottomBarContainer">

                <div className="column">
                    <h4>Bizzerd</h4>
                    <p>Home</p>
                    <p>Contact</p>
                    <p>Customers</p>
                </div>
                <div className="column">
                    <h4>Service</h4>
                    <p>Terms and Conditions</p>
                    <p>Privacy statement</p>
                    <p>Manual web</p>
                    <p>Manual app</p>
                    <p>User tips</p>
                </div>
                <div className="column">
                    <h4>Social media</h4>
                    <p><LinkedinIcon additionalClass={''} color={ICON_COLOR}/>Linkedin</p>
                    <p><WhatsappIcon color={ICON_COLOR}/> Whatsapp</p>
                    <p><FacebookIcon color={ICON_COLOR}/>Facebook</p>
                    <p><InstagramIcon color={ICON_COLOR}/>Instagram</p>
                    <p><TwitterIcon color={ICON_COLOR}/>Twitter</p>


                </div>
                <div className="column">
                    <h4> Phone number</h4>
                    <p><PhoneIcon color={ICON_COLOR}/>003188 - 227 22 22</p>
                    <h4>Bizzerd office</h4>
                    <p><Location color={ICON_COLOR}/> rembrandtlaan 24 </p>
                    <p>3723 BJ Bilthoven </p>
                    <p>The netherlands </p>
                </div>
                <div className="column">
                    <h4>Chamber of Commerce / VAT (netherlands)</h4>
                    <p>Chamber of Commerce</p>
                    <p>Utrecht 6366349</p>
                    <p>VAT NL 855341555 B01 </p>
                </div>

            </div>
        )
    }

}
