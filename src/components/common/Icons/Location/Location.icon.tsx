
import React, {ReactElement} from 'react';
import '../Icon.scss';
import IconProps from "../IconProps.interface";
const Location = (props: IconProps) : ReactElement => {

    return (
        <div className={`icon ${props.additionalClass}`}>
            <svg fill={props.color} xmlns="http://www.w3.org/2000/svg"  version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 511.999 511.999">
		        <path d="M255.999,0C152.786,0,68.817,85.478,68.817,190.545c0,58.77,29.724,130.103,88.349,212.017    c42.902,59.948,85.178,102.702,86.957,104.494c3.27,3.292,7.572,4.943,11.879,4.943c4.182,0,8.367-1.558,11.611-4.683    c1.783-1.717,44.166-42.74,87.149-101.86c58.672-80.701,88.421-153.007,88.421-214.912C443.181,85.478,359.21,0,255.999,0z     M255.999,272.806c-50.46,0-91.511-41.052-91.511-91.511s41.052-91.511,91.511-91.511s91.511,41.052,91.511,91.511    S306.457,272.806,255.999,272.806z"/>
            </svg>
        </div>
    )
};

export default Location;
