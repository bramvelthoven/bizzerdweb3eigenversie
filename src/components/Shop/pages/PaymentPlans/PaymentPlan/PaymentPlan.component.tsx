import React, {Component} from 'react'
import './paymentplan.scss'
import Button from "../../../../common/Button/Button.component";

type shopItemProps = {
    name: string;
    priceText: string;
    features: JSX.Element[];
    perUser: boolean;
    buttonText: string;
}

export default class PaymentPlan extends Component<shopItemProps> {

    constructor(props: shopItemProps) {
        super(props);

    }

    render(): JSX.Element {
        const {name, priceText, perUser, buttonText, features} = this.props;
        return (
            <div className="paymentPlan">
                {/*<div style={{'height':'100%','position':'relative'}}>*/}
                    <h1 className="name">{name}</h1>
                    <div className="line"/>
                    <h4 className="price">{priceText}<span style={{"opacity":"0"}}>€</span> </h4>
                    <p className={perUser ? 'perUser' : 'perUser transparent'}>Maandelijks per gebruiker</p>

                    <p className="bigBoldText"><b>Maandelijks opzegbaar</b></p>

                    <div className="featureList">
                        {features}
                        <p><b>Jaarlijkse</b> facturatie</p>

                    </div>
                    <Button className='planButton'>{buttonText}</Button>
                {/*</div>*/}
            </div>
        )
    }

}
