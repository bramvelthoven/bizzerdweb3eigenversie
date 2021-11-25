import React, { Component } from 'react'
import './statisticsblock.scss'
export default class StatisticsBlock extends Component {



    render() : JSX.Element {
        return (
            <div className="statisticsBlock">
               <div className="statistic">
                   <h4>Aangemaakt</h4>
                   <div className="counter">326</div>
               </div>
                <div className="statistic">
                    <h4>Gebruikers</h4>
                    <div className="counter">18.954</div>
                </div>
                <div className="statistic">
                    <h4>Gemiddeld cijfer</h4>
                    <div className="counter">8.9</div>
                </div>
            </div>
        )
    }

}
