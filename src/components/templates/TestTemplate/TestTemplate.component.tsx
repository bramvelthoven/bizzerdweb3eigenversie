import React, { Component } from 'react'
import './TestTemplate.scss';
import {editorFormState} from "../../Editor/Editor.container";
import validLinkOnClickHelper from '../templateFunctions/validLinkOnClick.helper';
import { translate } from 'react-i18nify';
import FacebookIcon from '../../common/Icons/Facebook/facebook.icon';
import LinkedinIcon from '../../common/Icons/Linkedin/linkedin.icon';
import InstagramIcon from '../../common/Icons/Instagram/instagram.icon';
import TwitterIcon from '../../common/Icons/Twitter/twitter.icon';
import DownloadIcon from '../../common/Icons/Download/Download.icon';


type templateProps = {
    formState: editorFormState
};
type templateState = {
    readLogo: string
}
export default class TestTemplate extends Component<templateProps, templateState> {
    constructor(props:templateProps) {
        super(props);
        this.state = {
            readLogo: ''
        }
    }
    render():JSX.Element {
        const {name,jobTitle, phoneNumber, email, companyName, zipCode, address, website, websiteName, secondaryBackgroundColor, backgroundColor, primaryColor, textColor, secondaryTextColor, logo} = this.props.formState;

        const reader = new FileReader();
        let readLogo: string;
        reader.onloadend = () => {
            if(!reader.result) return;
            readLogo = reader.result.toString();
            this.setState({
                readLogo
            })
        };

        reader.readAsDataURL(logo);


        return (
            <div className="cardTemplate" style={{backgroundColor:backgroundColor}}>
                <div className="logoContainer">
                    {this.state.readLogo == '' ? <p> No logo selected</p>:  <img src={this.state.readLogo} width="200" alt="logo" />}
                </div>
                <div className="pictureContainer">
                    
                    {this.state.readLogo == '' ? <p> No logo selected</p>:  <img src={this.state.readLogo} alt="logo" />}
                </div>
                <section className="bottomContainer" style={{backgroundColor: secondaryBackgroundColor}}>
                <div className="personalSection" >
                    <h4 style={{color:primaryColor}}>{name || translate('cardPlaceholders.name')}</h4>
                    <p style={{color:textColor}}>{jobTitle ||  translate('cardPlaceholders.jobTitle')}</p>
                    <p style={{color:textColor}}>{phoneNumber || translate('cardPlaceholders.phoneNumber')}</p>
                    <p style={{color:textColor}}>{email || translate('cardPlaceholders.email')}</p>
                    <h4 style={{color:primaryColor}}>{companyName || translate('cardPlaceholders.companyName')}</h4>
                    <p style={{color:textColor}}>{zipCode || translate('cardPlaceholders.zipCode')}</p>
                    <p style={{color:textColor}}>{address || translate('cardPlaceholders.address')}</p>
                    <p onClick={()=> validLinkOnClickHelper(website)} style={{color:textColor}}>{websiteName || translate('cardPlaceholders.website')}</p>
                </div>
                <div className="socialSection">
                    <table>
                        <tbody>
                        <tr>
                            <td>
                                <a className="iconContainer"><FacebookIcon color={secondaryTextColor}/></a>
                            </td>
                            <td>
                                <a className="iconContainer"><LinkedinIcon color={secondaryTextColor}/></a>
                        </td>
                        </tr>
                        <tr>
                            <td>
                                <a className="iconContainer"><InstagramIcon color={secondaryTextColor}/></a>
                            </td>
                            <td>
                                <a className="iconContainer"><TwitterIcon color={secondaryTextColor}/></a>
                        </td>
                        </tr>
                        <tr>
                            <td>
                                <a className="iconContainer"><DownloadIcon color={secondaryTextColor}/></a>
                            </td>
                            <td>
                            <a className="iconContainer"><DownloadIcon color={secondaryTextColor}/></a>
                        </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                </section>
            </div>
        )
    }
}
