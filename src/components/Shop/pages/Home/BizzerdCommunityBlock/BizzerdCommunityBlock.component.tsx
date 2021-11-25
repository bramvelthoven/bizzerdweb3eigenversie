import React, { Component } from 'react'
import './BizzerdCommunityBlock.scss'
export default class BizzerdCommunityBlock extends Component {



    render(): JSX.Element {
        return (
            <div className="blockContainer">
                <div className="row">
                    <div className="block-2-community">
                        <h4>Zo draag je met bizzerd bij aan milieu en klimaat</h4>
                        <p>Wist je dat er wereldwijd jaarlijks ruim 10 miljard visitekaartjes worden gedrukt?
                            Dat is zo’n 27 miljoen per dag.
                            Bijna 90 procent van die kaartjes verdwijnt binnen een week in de prullenbak.
                            De rest na iets langere tijd. Al die miljarden stukjes bedrukt papier bij elkaar drukken belasten de natuur, het milieu en het klimaat.
                            Er wordt bos voor gekapt. Het drukwerk is belastend. En het transport zorgt voor uitstoot. Kies voor duurzaam; papierloos. Kies bizzerd.</p>


                    </div>
                    <div className="block-1-community">
                    <h4>Het gemak van een digitaal visitekaartje</h4>
                    <p>Gemak voor jou: je hoeft nooit meer een nieuw visitekaartje te laten drukken als bijvoorbeeld je adres wijzigt. Gemak voor de ontvanger: een ontvangen bizzerd voeg je in 1 klik toe aan je Contacten.</p>
                    </div>
                </div>


            </div>
        )
    }

}
