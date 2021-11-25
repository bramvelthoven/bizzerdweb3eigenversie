import React, {Component} from 'react'
import './slideshow.scss'



export type SlideShowProps = {
    slides: JSX.Element[]
};
export type SlideShowState = {
    currentSlide: number
}
export default class SlideShow extends Component<SlideShowProps, SlideShowState> {
    constructor(props) {
        super(props);
        this.state = {
            currentSlide: 0
        }

    }

    clickOnStep = (index: number) => {
        this.setState({
            currentSlide: index
        })
    }
    renderSteps = (): JSX.Element => {
        console.log('fefe')
        return <div className="stepContainer">
            {this.props.slides.map((slide, i) => {
            return <div className={`${this.state.currentSlide === i ? 'active' : ''} step`} onClick={() => { this.clickOnStep(i)}} />
            })
            }
        </div>
    }

    render = () => {
        return (

            <div className='slideShow'>

                <div className='imageContainer'>
                    {this.props.slides[this.state.currentSlide]}
                </div>
                <div>{this.renderSteps()}</div>
            </div>
        )
    }

}
