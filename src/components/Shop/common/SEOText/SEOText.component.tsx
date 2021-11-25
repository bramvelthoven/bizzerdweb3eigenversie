import React, { Component } from 'react'
import './SEOText.scss'
import tiltedPhone from "../../../../assets/img/tiltedPhone.png";
export default class SEOText extends Component{



    render() : JSX.Element {
        return (
            <div className="SeoTextBlock">
                <div className="SeoTextContainer">
                <h2>Waarom kiezen voor het meest gebruikte digitale, papierloze visitekaartje? </h2>
                <p>bizzerd is het digitale, papierloze visitekaartje. Bizzerd is eenvoudig: makkelijk te gebruiken. Bizzerd is praktisch: je hebt altijd je visitekaartjes bij je. Bizzerd is duurzaam: geen onnodige papierverspilling.
                    Met een digitaal visitekaartjes van bizzerd ben je altijd up-to-date. En je hebt een onbeperkte voorraad visitekaartjes! Je zit dus nooit meer zonder visitekaartjes op momenten dat het ertoe doet!
                </p>
                    <p>
                        Profiteer van alle extra mogelijkheden: voeg bijvoorbeeld whitepapers, jaarverslagen en bedrijfsfilms toe aan jouw digitale visitekaartje. Of je cv als je gaat solliciteren. bizzerd wordt veel gebruikt als digitaal cv en portfolio.
                        Kies voor maatschappelijk verantwoord ondernemen (MVO): kies voor papierloze visitekaartjes. Dat is niet alleen innovatief, maar ook minder milieubelastend, CO2-verlagend en dus beter voor het klimaat.
                        bizzerd is het meest gebruikte digitale visitekaartje.  Waar wacht je nog op? Geef je visitekaartje af. In jouw stijl, op jouw manier.
                    </p>
                </div>
                <img className="phone-seo" src={tiltedPhone} alt="gekantelde telefoon"/>
            </div>
        )
    }

}
