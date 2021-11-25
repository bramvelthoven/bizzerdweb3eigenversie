import React, { Component } from 'react'
import { IProduct } from '../../../../../../services/interfaces/IProduct.interface';
import './shopItem.scss'
type shopItemProps = {
    product: IProduct
}

const tempFormState = {
    name: 'gerrit',
    jobTitle: 'dev',
    phoneNumber: '0612345678',
    email: 'gerrit@bizzerd.com',
    companyName: 'bizzerd',
    zipCode: '3584ff',
    address: 'rembrandtlaan 24',
    website: 'bizzerd.com',
    websiteName: 'bizzerd',
    secondaryBackgroundColor: '#ffffff',
    backgroundColor: '#34ff23',
    primaryColor: '#00ff00',
    textColor: '#000000',
    secondaryTextColor: '#121212',
    logo: new File([],''),
    activeStep: 0,
    twitterLink: '',
    facebookLink: '',
    linkedInLink: '',
    instagramLink: '',
    picture: new File([],'')
}
export default class ShopItem extends Component<shopItemProps>{

    constructor(props: shopItemProps) {
        super(props);

    }

    render() : JSX.Element {
        const {title, price} = this.props.product;
        return (
            <div className="shopItem">
            <div className="shopCard">
                kaartje
            </div>
            <div className="shopItemText">
                <h6>{title}</h6>
                <p><span className="primaryText">€ {price}</span> p.p. p.m.</p>
            </div>
            </div>
        )
    }

}
