import React, { Component } from 'react'

import './bulletpoints.scss'
import {ICON_COLOR} from "../../../../constants";
import CheckMarkIcon from '../../../common/Icons/CheckMark/Checkmark.icon';


export default class BulletPoints extends Component{



    render() : JSX.Element {
        return (
            <div className="bulletpointItems">
              <div className="bulletPoint">
                  <CheckMarkIcon additionalClass={"bulletPointIcon"} color={ICON_COLOR}/>
                  <p className="bulletPointText">Altijd uniek en persoonlijk</p>
              </div>
                <div className="bulletPoint">
                    <CheckMarkIcon additionalClass={"bulletPointIcon"} color={ICON_COLOR}/>
                    <p className="bulletPointText">Al vanaf € 0,30 per maand</p>
                </div>
                <div className="bulletPoint">
                    <CheckMarkIcon additionalClass={"bulletPointIcon"} color={ICON_COLOR}/>
                    <p className="bulletPointText">Eenvoudig, Praktisch, Duurzaam</p>

                </div>
            </div>
        )
    }

}
