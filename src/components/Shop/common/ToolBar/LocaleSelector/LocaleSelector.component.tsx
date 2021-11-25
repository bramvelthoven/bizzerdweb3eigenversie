import React from "react";
import './localeselector.scss'
import {getLocale, setLocale} from 'react-i18nify'
import {localeArray, localeObject} from "../../../../../locales";
type localeSelectorProps = {

}
type localeSelectorState = {
    options: localeObject[],
    selected: string,
}

export default class LocaleSelector extends React.Component<localeSelectorProps,localeSelectorState> {
    constructor(props: localeSelectorProps) {
        super(props);

        this.state = {
            selected: getLocale() || 'en',
            options: localeArray
        };
        this.onChange = this.onChange.bind(this);
    }

    renderOptions() {
        if (!this.state.options) {
            return;
        }

        return this.state.options.map((option: localeObject, i) => {
            return (
                <option key={i} value={option.locale}>
                    {option.full}
                </option>
            );
        });
    }

    onChange(e: React.ChangeEvent<HTMLSelectElement>) {
        setLocale(e.target.value)
        this.setState({
            selected: e.target.value
        })

    }
    render() {
        return (
            <div className="dropdown">
               <select onChange={this.onChange} value={this.state.selected}>
                   {this.renderOptions()}
               </select>
            </div>
        );
    }
}