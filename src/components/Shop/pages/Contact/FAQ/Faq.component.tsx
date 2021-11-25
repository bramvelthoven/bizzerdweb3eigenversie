import React, {Component} from 'react'
import './faq.scss'
import FaqItem from "./FAQItem/FaqItem.component";

export default class FAQ extends Component {


    render(): JSX.Element {

        return (
            <div className="faq">
                <div className={'FaqContainer'}>
                    <h2>FAQ</h2>
                    <FaqItem question={'Hier komt een vraag die vaker gesteld is, als je er op klikt kom je achter het antwoord'}
                             answer={"Hier kan het antwoord op de vraag komen te staan.\nDit kan verdeeld over een paar regels. \nUitgelegd worden"}/>
                    <FaqItem question={'Hier komt een vraag die vaker gesteld is, als je er op klikt kom je achter het antwoord'}
                             answer={"Hier kan het antwoord op de vraag komen te staan.\nDit kan verdeeld over een paar regels. \nUitgelegd worden"}/>
                    <FaqItem question={'Hier komt een vraag die vaker gesteld is, als je er op klikt kom je achter het antwoord'}
                             answer={"Hier kan het antwoord op de vraag komen te staan.\nDit kan verdeeld over een paar regels. \nUitgelegd worden"}/>
                    <FaqItem question={'Hier komt een vraag die vaker gesteld is, als je er op klikt kom je achter het antwoord'}
                             answer={"Hier kan het antwoord op de vraag komen te staan.\nDit kan verdeeld over een paar regels. \nUitgelegd worden"}/>
                    <FaqItem question={'Hier komt een vraag die vaker gesteld is, als je er op klikt kom je achter het antwoord'}
                             answer={"Hier kan het antwoord op de vraag komen te staan.\nDit kan verdeeld over een paar regels. \nUitgelegd worden"}/>
                    <FaqItem question={'Hier komt een vraag die vaker gesteld is, als je er op klikt kom je achter het antwoord'}
                             answer={"Hier kan het antwoord op de vraag komen te staan.\nDit kan verdeeld over een paar regels. \nUitgelegd worden"}/>
                </div>
            </div>
        )
    }

}
