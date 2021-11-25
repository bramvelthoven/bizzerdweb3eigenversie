import React, {ChangeEvent, ReactElement} from 'react'
import './TextFieldGroup.scss'
export type ITextFieldGroup  = {
    value: string,
    type: string,
    inputName: string,
    onChange : (event: ChangeEvent<HTMLInputElement>, name: string) => void,
} & DefaultProps
type DefaultProps = Partial<typeof defaultProps>;
const defaultProps = {
        disabled: false,
        autofocus: false,
        label: '',
        placeholder: '',
        fullWidth: false,
        highlightable: false};

const TextFieldGroup = (props: ITextFieldGroup) :ReactElement => {
    props = {...defaultProps, ...props};
    const handleChange = (e:ChangeEvent<HTMLInputElement>): void => {
        props.onChange(e,props.inputName);
    };

    const inputClassName = `input-field__input ${props.highlightable ? 'highlightable' : ''}`
    return (
            <div className='input-field'>
                <div className="input-field__label">
                    <span>{props.label}</span>
                </div>
                <input type={props.type} className={inputClassName}
                       placeholder={props.placeholder} name={props.inputName} value={props.value} autoFocus={props.autofocus} disabled={props.disabled} onChange={handleChange}/>
            </div>
    )
};

export default TextFieldGroup