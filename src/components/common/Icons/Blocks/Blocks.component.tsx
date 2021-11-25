import React, {ReactElement} from 'react';
import '../Icon.scss';
import IconProps from "../IconProps.interface";
const BlocksIcon = (props: IconProps) : ReactElement => {

    return (
        <div className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill={props.color} id="Icons"  viewBox="0 0 74 74">
                <path d="m54 26.625a1 1 0 0 1 -1-1v-1.25a1 1 0 0 1 2 0v1.25a1 1 0 0 1 -1 1z"/>
                <path d="m37 41.613a1 1 0 0 1 -1-1v-19.834a1 1 0 0 1 .654-.938l17-6.257a1 1 0 0 1 1.346.938v5.853a1 1 0 0 1 -2 0v-4.419l-15 5.521v17.7l15-5.521v-3.656a1 1 0 0 1 2 0v4.356a1 1 0 0 1 -.654.938l-17 6.257a1.015 1.015 0 0 1 -.346.062z"/>
                <path d="m37 41.613a1.015 1.015 0 0 1 -.346-.062l-17-6.257a1 1 0 0 1 -.654-.938v-19.834a1 1 0 0 1 1.346-.938l17 6.257a1 1 0 0 1 .654.938v19.834a1 1 0 0 1 -1 1zm-16-7.955 15 5.521v-17.7l-15-5.523z"/>
                <path d="m54 15.523a.989.989 0 0 1 -.385-.078l-16.615-6.923-16.615 6.923a1 1 0 1 1 -.77-1.845l17-7.084a1.007 1.007 0 0 1 .77 0l17 7.084a1 1 0 0 1 -.385 1.923z"/>
                <path d="m54 67.561a1.014 1.014 0 0 1 -.346-.061l-17-6.258a1 1 0 0 1 -.654-.942v-19.687a1 1 0 0 1 1.391-.921l17 7.2a1 1 0 0 1 .609.921v18.748a1 1 0 0 1 -1 1zm-16-7.955 15 5.521v-16.647l-15-6.357z"/>
                <path d="m54 67.561a1 1 0 0 1 -1-1v-18.743a1 1 0 0 1 .609-.921l17-7.2a1 1 0 0 1 1.391.916v19.687a1 1 0 0 1 -.654.938l-17 6.258a1.014 1.014 0 0 1 -.346.065zm1-19.081v16.647l15-5.521v-17.483z"/>
                <path d="m71 41.613a1 1 0 0 1 -.346-.062l-16.654-6.13-16.654 6.13a1 1 0 0 1 -.692-1.877l17-6.257a1 1 0 0 1 .692 0l17 6.257a1 1 0 0 1 -.346 1.939z"/>
                <path d="m20 67.561a1 1 0 0 1 -1-1v-18.743a1 1 0 0 1 .609-.921l17-7.2a1 1 0 0 1 1.391.916v19.687a1 1 0 0 1 -.654.938l-17 6.258a1.014 1.014 0 0 1 -.346.065zm1-19.081v16.647l15-5.521v-17.483z"/>
                <path d="m20 67.561a1.014 1.014 0 0 1 -.346-.061l-17-6.258a1 1 0 0 1 -.654-.942v-19.687a1 1 0 0 1 1.391-.921l17 7.2a1 1 0 0 1 .609.921v18.748a1 1 0 0 1 -1 1zm-16-7.955 15 5.521v-16.647l-15-6.357z"/>
                <path d="m37 41.613a1 1 0 0 1 -.346-.062l-16.654-6.13-16.654 6.13a1 1 0 0 1 -.692-1.877l17-6.257a1 1 0 0 1 .692 0l17 6.257a1 1 0 0 1 -.346 1.939z"/>
            </svg>
        </div>
    )
};

export default BlocksIcon;