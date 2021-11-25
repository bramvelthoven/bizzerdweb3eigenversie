import React, {FunctionComponent, PropsWithChildren} from 'react';
import './Button.scss';

export interface buttonProps {
    className: string
}
const Button: FunctionComponent<buttonProps> = (props: PropsWithChildren<buttonProps>) => <button className={`pure-material-button-contained ${props.className}`}>{props.children}</button>

export default Button;