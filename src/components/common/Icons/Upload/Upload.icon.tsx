import React, {ReactElement} from 'react';
import '../Icon.scss';
import IconProps from "../IconProps.interface";

const UploadIcon = (props: IconProps): ReactElement => {

    return (
        <div className={`icon ${props.additionalClass}`}>
            <svg fill={props.color} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 276.09 260.92">

                <path className="cls-1"
                      d="M108.21,122.7l17.85.07-.14,38a2,2,0,0,0,2,2l24.58.08a2,2,0,0,0,2-2l.13-38,17.85.06a2.55,2.55,0,0,0,2.22-3.82l-32-55.83a2.55,2.55,0,0,0-4.42,0L106,118.87A2.55,2.55,0,0,0,108.21,122.7Z"/>
                <path className="cls-1"
                      d="M195.06,146.66h-22.8v27.47a1.87,1.87,0,0,1-2,1.65H105.85a1.87,1.87,0,0,1-2-1.65V146.66H81a1.87,1.87,0,0,0-2,1.65v49a1.87,1.87,0,0,0,2,1.65h114a1.86,1.86,0,0,0,2-1.65v-49A1.87,1.87,0,0,0,195.06,146.66Z"/>
            </svg>
        </div>
    )
};

export default UploadIcon;