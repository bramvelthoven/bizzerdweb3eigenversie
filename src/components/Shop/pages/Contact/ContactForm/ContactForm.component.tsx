import React, {Component} from 'react'
import './contactform.scss'
import {EditableInput} from "react-color/lib/components/common";

export default class ContactForm extends Component {


    render(): JSX.Element {
        return (
            <div className="contact">
                <form className={"contactForm"}>
                    <input id="name" className="contactFormInput" placeholder={'Naam *'} type="text"/>
                    <input id="bedrijfsnaam" className="contactFormInput" placeholder={'Bedrijfsnaam *'} type="text"/>
                    <input id="emailadres" className="contactFormInput" placeholder={'E-mailadres *'} type="email"/>
                    <input id="telefoonnummer" className="contactFormInput" placeholder={'Telefoonnummer *'}
                           type="tel"/>
                    <textarea id="bericht" className="contactFormInputArea" placeholder={'Bericht *'}/>
                    <input className='submit' type="submit" value="Verzenden"/>
                </form>
            </div>
        )
    }

}
