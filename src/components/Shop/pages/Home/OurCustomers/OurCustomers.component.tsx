import React, { Component } from 'react'
import './ourcustomers.scss'
export default class OurCustomers extends Component{



    render() : JSX.Element {
        return (
            <div className="reviewBlock">
               <h1>Onze klanten</h1>
                <button>Start nu ook</button>
                <button>left arrow</button>
                <button>right arrow</button>
                <div>review blokje van klant</div>
                <div>klant logo</div>
            </div>
        )
    }

}
