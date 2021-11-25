import React, { Component } from 'react'
import { ICON_COLOR } from '../../../../../constants'
import SearchIcon from '../../../../common/Icons/Search/SearchIcon.component'
import './searchbar.scss'

export default class SearchBar extends Component{


    render() : JSX.Element {
        return (
            <div className="searchBar">
                <input placeholder={"Search"}/>
                <button><SearchIcon color={ICON_COLOR}/></button>
            </div>
        )
    }

}
