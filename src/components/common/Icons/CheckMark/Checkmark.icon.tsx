import React, {ReactElement} from 'react';
import '../Icon.scss';
import IconProps from "../IconProps.interface";
const CheckMarkIcon = (props: IconProps) : ReactElement => {
   
    return (
        <div className={`icon ${props.additionalClass}`}>

            <svg fill={props.color} xmlns="http://www.w3.org/2000/svg"  id="Layer_1" data-name="Layer 1" viewBox="0 0 103.77 92.31">
                <path className="cls-1"
                      d="M53.17,28.19A17.8,17.8,0,1,0,71,46,17.79,17.79,0,0,0,53.17,28.19ZM63.36,38.86l-8,16.58a2.79,2.79,0,0,1-4.79.34L43.15,44.35a2.71,2.71,0,0,1,4.54-3l4.85,7.45,5.94-12.34a2.71,2.71,0,0,1,4.88,2.35Z"/>
            </svg>
        </div>
    )
};

export default CheckMarkIcon;