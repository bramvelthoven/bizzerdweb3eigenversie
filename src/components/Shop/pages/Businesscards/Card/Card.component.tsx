import React, {Component} from 'react'
import './card.scss'
import orange_triangle from '../../../../../assets/img/orange_triangle.png'
import {BsFillTriangleFill, BsFillCircleFill} from "react-icons/bs"
import Collapsible from "react-collapsible";
import CardHolder from '../../../../../assets/img/card_holder.png'
import Sidebar from "../Sidebar/Sidebar.component";


interface CardProps {
    openDetail: any,
    title: string,
    price: string;
}

export default class Card extends Component<CardProps> {
    constructor(props) {
        super(props);
        this.state = {}

    }


    render = () => {
        return (

            <div className={'cardHolder'} >
                <img className={'card'} src={CardHolder} onClick={()=>this.props.openDetail("1234")}/>
                <p className={"title"}><b>{this.props.title}</b></p>
                <p className={'pppm'}><b><span className={'price'}>{this.props.price}</span></b> p.p.p.m</p>
            </div>
        )
    }

}
