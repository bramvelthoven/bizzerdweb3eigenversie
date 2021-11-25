import React, {Component} from 'react'
import './sidebar.scss'
import orange_triangle from '../../../../../assets/img/orange_triangle.png'
import {BsFillTriangleFill,BsFillCircleFill} from "react-icons/bs"
import Collapsible from "react-collapsible";

export default class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: {
                'Populair': ['Meest gekozen', 'Nieuwst toegevoegd'],
                'Branches': [
                    'Auto & transport',
                    'Beauty & spa',
                    'Bouw & renovatie',
                    'Detailhandel & verkoop',
                    'Financieel & verzekering',
                    'Gezondheid & maatschappelijke dienstverlening',
                    'Horeca',
                    'Kunst & entertainment',
                    'Zakelijke oplossingen'
                ],
                'Kleur': [
                    'Rood',
                    'Oranje',
                    'Geel',
                    'Groen',
                    'Blauw',
                    'Paars/roze',
                    'Zwart',
                    'Grijs',
                    'Bruin'
                ],
                'Afbeelding': [
                    'Profielfoto groot',
                    'Profielfoto klein',
                    'Geen foto',
                    'Profielfoto + andere foto'
                ]
            }, color: {
                'Rood': "#e30613",
                'Oranje': "#faa634",
                'Geel': "#f7ff10",
                'Groen': "#3dbb2c",
                'Blauw': "#2f3fce",
                'Paars/roze': "#ed34fa",
                'Zwart': "#000000",
                'Grijs': "#c4c4c4",
                'Bruin': "#644418"
            }
        }

    }

    collapseSubcategory = (s: string) => {
        // @ts-ignore
        for (let el of document.getElementsByClassName(s)) {
            el.style.visibility = 'collapse';
        }
    }
    render = () => {
        let items: JSX.Element[] = []
        for (const [category, subcategories] of Object.entries(this.state['categories'])) {
            let subitems: JSX.Element[] = []
            for (const subcategory of subcategories as []) {
                let col : JSX.Element = <div/>;
                if (category==="Kleur"){
                    col = <BsFillCircleFill style={{position:'relative',color:this.state['color'][subcategory],marginRight: 6,top:2}}/>
                }
                let sub_item = (<div className={'subcategory'}>{col}{subcategory} <span
                    style={{float: 'right', marginRight: "12px"}}>20</span></div>)
                subitems.push(sub_item)
            }
            let triggerDiv = (<div className={"CollapsibleDiv"}>{category}<BsFillTriangleFill
                style={{color: '#F7A823', float: 'right', marginRight: "10px", marginTop: 0}}/></div>)
            items.push(
                <Collapsible transitionTime={200} open={true} trigger={triggerDiv}>
                    {subitems.map(item => item)}
                </Collapsible>
            )


        }
        let rendered_output = items.map(item => <div>{item}</div>)
        return (
            <div className={'leftSidebar'}>
                {rendered_output}
            </div>
        )
    }

}
