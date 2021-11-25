import React, {Component} from 'react'
import './pagination.scss'
import {BsFillTriangleFill} from "react-icons/bs"


interface PaginationProps {
    pageNrs: number,
    changePage: any,
    nextPrevPage: any,
}

export default class Pagination extends Component<PaginationProps> {
    constructor(props) {
        super(props);
        this.state = {}
    }


    render = () => {
        let nrs: JSX.Element[] = []
        for (let i = 1; i <= this.props.pageNrs; i++) {
            nrs.push(<div onClick={() => this.props.changePage(i - 1)} className={'numberCircle'}>{i}</div>)
        }
        return (

            <div className={'pagination'}>
                <BsFillTriangleFill onClick={() => this.props.nextPrevPage(-1)} style={{transform: 'rotate(270deg)'}}/>
                {nrs.map(item => item)}
                <BsFillTriangleFill onClick={() => this.props.nextPrevPage(1)} style={{
                    transform: 'rotate(90deg)', marginLeft: '14px'
                }}/>
            </div>
        )
    }

}
