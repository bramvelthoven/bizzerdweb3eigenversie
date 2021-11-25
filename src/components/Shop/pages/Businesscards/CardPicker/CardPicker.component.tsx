import React, {Component} from 'react'
import './cardpicker.scss'
import Sidebar from "../Sidebar/Sidebar.component";
import Card from "../Card/Card.component";
import Pagination from "../Pagination/Pagination.component";

export default class CardPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pagenr: 0,
            maxCards: 9,
            cards: [
                <Card title={'Grote foto'} price={'€0.99'} openDetail={this.openDetailPage}/>,
                <Card title={'Basis'} price={'€0.99'} openDetail={this.openDetailPage}/>,
                <Card title={'Kleine foto'} price={'€0.99'} openDetail={this.openDetailPage}/>,
                <Card title={'Kleine foto1'} price={'€0.99'} openDetail={this.openDetailPage}/>,
                <Card title={'Kleine foto2'} price={'€0.99'} openDetail={this.openDetailPage}/>,
                <Card title={'Kleine foto3'} price={'€0.99'} openDetail={this.openDetailPage}/>,
                <Card title={'Kleine foto4'} price={'€0.99'} openDetail={this.openDetailPage}/>,
                <Card title={'Kleine foto5'} price={'€0.99'} openDetail={this.openDetailPage}/>,
                <Card title={'Kleine foto6'} price={'€0.99'} openDetail={this.openDetailPage}/>,
                <Card title={'Kleine foto7'} price={'€0.99'} openDetail={this.openDetailPage}/>,
                <Card title={'Kleine foto8'} price={'€0.99'} openDetail={this.openDetailPage}/>,
                <Card title={'Kleine foto9'} price={'€0.99'} openDetail={this.openDetailPage}/>,
                <Card title={'Kleine foto10'} price={'€0.99'} openDetail={this.openDetailPage}/>,
                <Card title={'Kleine foto11'} price={'€0.99'} openDetail={this.openDetailPage}/>,
                <Card title={'Kleine foto12'} price={'€0.99'} openDetail={this.openDetailPage}/>,
            ]
        }
    }

    openDetailPage = (card_id) => {
        window.location.href = "http://localhost:3000/detail"
    }


    render = () => {
        return (
            <div>
                <div className={'cardPickerContainer'}>
                    <Sidebar/>
                    <div className={'titleBusinessCardsContainer'}>
                        <h1 className={'titleBusinessCards'}>Visitekaartjes</h1>
                        <h1 style={{marginTop: 0, marginLeft: '7vw'}}>{this.state['cards'].length} Resultaten</h1>
                        <div className={'cardPicker'}>
                            {this.getCards().map(item => item)}
                        </div>
                    </div>
                </div>
                <Pagination changePage={this.changePage} nextPrevPage={this.nextPrevPage}
                            pageNrs={Math.ceil(this.state['cards'].length / this.state['maxCards'])}/>
            </div>)
    }

    changePage = (new_page) => {
        window.scrollTo(0, 0);
        this.setState({'pagenr': new_page})
    }
    nextPrevPage = (new_page) => {

        if (this.state['pagenr'] + new_page < 0 || (this.state['pagenr'] + new_page) > Math.ceil(this.state['cards'].length / this.state['maxCards']) - 1) {
            return
        }
        this.setState({'pagenr': this.state['pagenr'] + new_page})
        window.scrollTo(0, 0);
    }

    private getCards() {

        let from = this.state['pagenr'] * this.state['maxCards'];
        let to = this.state['pagenr'] * this.state['maxCards'] + this.state['maxCards']
        let posCards = this.state['cards']
        return posCards.slice(from, to)
    }
}
