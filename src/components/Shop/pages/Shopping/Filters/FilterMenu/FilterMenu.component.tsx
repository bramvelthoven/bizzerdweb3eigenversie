import React, { Component } from 'react'
import './FilterMenu.scss';

type filterMenuProps = {
    title: string,
    open?: boolean
}
type filterMenuState = {
    open: boolean
}
export default class FilterMenu extends React.Component<filterMenuProps, filterMenuState> {

    constructor(props: filterMenuProps) {
        super(props);
        this.state = {
            open: this.props.open || false
        }
        this.activateMenu = this.activateMenu.bind(this);
    }

    activateMenu () {
        this.setState({open:!this.state.open})
    }

    render() {
        return (
            <div className="col-sm-4 col-sm-offset-4">
                <div className="panel-group">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h4 className="panel-title">
                                <a href="#"
                                   onClick={this.activateMenu} >{this.props.title}</a>
                            </h4>
                        </div>
                        <div className={this.state.open? "panel-collapse": "panel-collapse panel-close"}
                        >
                            {this.props.children}
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}