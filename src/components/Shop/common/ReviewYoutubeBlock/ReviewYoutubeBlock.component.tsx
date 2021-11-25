import React, { Component } from 'react'
import './reviewYoutubeBlock.scss'
export default class ReviewYoutubeBlock extends Component {



    render() : JSX.Element {
        return (
            <div className="blockContainer-review">

                    <div className="block-2">
                        hier komt zo'n mooi trustpilot stuk
                    </div>
                    <div className="block-2">
                        <h1 className="youtubeTitle">Zo eenvoudig is het!</h1>
                        <iframe
                            className="youtubeVideo"
                            src=""
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen/>

                    </div>



            </div>
        )
    }

}
