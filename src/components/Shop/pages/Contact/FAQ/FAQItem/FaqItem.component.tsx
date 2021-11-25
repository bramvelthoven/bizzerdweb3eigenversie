import React, {Component} from 'react'
import './faqitem.scss'
import orange_triangle from '../../../../../../assets/img/orange_triangle.png'
import Collapsible from "react-collapsible";
import {BsFillTriangleFill} from "react-icons/bs"


interface ComponentProps {
    question: string,
    answer: string;
}

export default class FaqItem extends Component<ComponentProps> {


    constructor(props) {
        super(props);
        this.state = {
            hidden: true,
        }
    }

    render() {
        let triggerDiv = (<div style={{width:'100%',overflow:'hidden'}}>{this.props.question}<BsFillTriangleFill style={{color:'#F7A823',float:'right',marginRight:"25px",overflow:'hidden'}}/></div>)
        return (
            <div className={'faqGroup'}>
                <Collapsible  trigger={triggerDiv}>
                    <div className={"content"}>
                        {this.props.answer}
                    </div>
                </Collapsible>
            </div>
        )
    }

}
