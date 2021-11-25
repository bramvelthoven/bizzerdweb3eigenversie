import './pageTitle.scss'

import React, { Component } from 'react'

export type pageTitleProps = {
    title: string;
    subTitle: string;
}
export default class PageTitle extends Component<pageTitleProps> {


    render() : JSX.Element {
        return (
            <div className="pageTitle">
                <div >
                    <h1>{this.props.title}</h1>

                    <p>
                        {this.props.subTitle}
                    </p>
                    <div/>
                </div>
            </div>
        )
    }

}