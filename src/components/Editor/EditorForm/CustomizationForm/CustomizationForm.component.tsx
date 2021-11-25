import React, {ChangeEvent, Component} from 'react'
import './CustomizationForm.scss'
import {editorFormState} from "../../Editor.container";
import {translate} from 'react-i18nify';
import ColorPicker from '../../../common/ColorPicker/ColorPicker.component';
interface essentialsFormProps {
    formChange: (value: unknown, name: string) => void,
    formState: editorFormState,
    nextStep: ()=> void,
    previousStep: ()=> void,
}

class ColorForm extends Component<essentialsFormProps, editorFormState> {


    constructor(props: essentialsFormProps) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleColorChange = this.handleColorChange.bind(this);
    }

    handleChange(e:ChangeEvent<HTMLInputElement>,name: string): void{
        this.props.formChange(e.currentTarget.value, name)
    }
    handleColorChange(color: string,name: string): void{
        this.props.formChange(color, name)
    }
    handlePictureSelector(selectorFiles: FileList | null, name: string): void {
        if (!selectorFiles) return;
        const file = selectorFiles[0];
        this.props.formChange(file, name)
    }
    render (): JSX.Element {
        const {backgroundColor, secondaryBackgroundColor, primaryColor, textColor, secondaryTextColor} = this.props.formState;
        console.log(translate('editor.backgroundColor'));
        return <div className={'form-group'}>
            <h1 className="formTitle">{translate('editor.Customization')}</h1>
            <ColorPicker onChange={this.handleColorChange} name="backgroundColor" color={backgroundColor} label={translate('editor.backgroundColor.label')} />
            <ColorPicker onChange={this.handleColorChange} name="secondaryBackgroundColor" color={secondaryBackgroundColor} label={translate('editor.secondaryBackgroundColor.label')} />
            <ColorPicker onChange={this.handleColorChange} name="primaryColor" color={primaryColor} label={translate('editor.primaryColor.label')} />
            <ColorPicker onChange={this.handleColorChange} name="textColor" color={textColor} label={translate('editor.textColor.label')} />
            <ColorPicker onChange={this.handleColorChange} name="secondaryTextColor" color={secondaryTextColor} label={translate('editor.secondaryTextColor.label')} />
            <input type="file" onChange={ (e) => this.handlePictureSelector(e.target.files, 'logo') } />
            <input type="file" onChange={ (e) => this.handlePictureSelector(e.target.files, 'picture') } />
            <button className="button button--primary" onClick={this.props.previousStep}>{translate('generic.previousStep')}</button>
            <button className="button button--primary" onClick={this.props.nextStep}>{translate('generic.nextStep')}</button>
        </div>
    }



}

export default ColorForm;