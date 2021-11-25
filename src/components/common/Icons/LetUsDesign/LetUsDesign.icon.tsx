
import React, {ReactElement} from 'react';
import '../Icon.scss';
import IconProps from "../IconProps.interface";
const LetUsDesignIcon = (props: IconProps) : ReactElement => {

    return (
        <div className={`icon ${props.additionalClass}`}>
            <svg fill={props.color} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 276.09 260.92">

                <path className="cls-1"
                      d="M123.28,192.62l.79-2.72.06-.3,9.25-32.43A30.39,30.39,0,1,1,149,140l27.54-27.54-3.94-1.2-.2,0a54.1,54.1,0,0,0-2.35-5.67,3.38,3.38,0,0,0,.35-.31l5.34-13.45a3,3,0,0,0-.2-4.24l-14.8-13.52a3,3,0,0,0-4.24.19l-11.15,6.16a54.6,54.6,0,0,0-7.51-3.15l-4.71-12.42a3,3,0,0,0-3-3H110.07a3,3,0,0,0-3,3l-4.21,12.44a55,55,0,0,0-7.62,3.21L83.12,75.15a3,3,0,0,0-4.24,0L64.75,89.39a3,3,0,0,0,0,4.24l6,12a54.77,54.77,0,0,0-2.93,7.32L55,117.68a3,3,0,0,0-3,3l-.13,20.05a3,3,0,0,0,3,3l13.49,4.66h.12A54.89,54.89,0,0,0,71,154.22a3.11,3.11,0,0,0-.57.46L64.86,168a3,3,0,0,0,.13,4.24L79.57,186a3,3,0,0,0,4.24-.12l12.49-6.63a56,56,0,0,0,5.86,2.43,2.45,2.45,0,0,0,0,.39l4.9,13.6a3,3,0,0,0,3,3l15.42.25a11.86,11.86,0,0,1-1.21-2.75A4.2,4.2,0,0,1,123.28,192.62Z"/>
                <rect className="cls-1" x="143.22" y="109.27" width="106.79" height="42.46" rx="3"
                      transform="translate(-34.69 177.25) rotate(-45)"/>
                <path className="cls-1" d="M130.25,192.57c-.79,3.53,3.21,6.22,6.77,5.54l31.18-9-28.72-28.31Z"/>
            </svg>
        </div>
    )
};

export default LetUsDesignIcon;
