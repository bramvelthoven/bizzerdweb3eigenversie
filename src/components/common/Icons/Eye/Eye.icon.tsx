
import React, {ReactElement} from 'react';
import '../Icon.scss';
import IconProps from "../IconProps.interface";
const EyeIcon = (props: IconProps) : ReactElement => {

    return (
        <div className={`icon ${props.additionalClass}`}>
            <svg fill={props.color} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 276.09 260.92">

                <path className="cls-1"
                      d="M138.05,62.86c-59,0-106.77,67.6-106.77,67.6s47.8,67.6,106.77,67.6,106.77-67.6,106.77-67.6S197,62.86,138.05,62.86Zm0,110.4c-37.34,0-67.6-42.8-67.6-42.8s30.26-42.8,67.6-42.8,67.6,42.8,67.6,42.8S175.38,173.26,138.05,173.26Z"/>
                <circle className="cls-1" cx="138.05" cy="130.46" r="25.77"/>
            </svg>
        </div>
    )
};

export default EyeIcon;
