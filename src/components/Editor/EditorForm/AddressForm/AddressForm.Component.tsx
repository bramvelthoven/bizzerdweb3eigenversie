import React, {ChangeEvent, Component} from 'react'
import './AddressForm.scss'
import {editorFormState} from "../../Editor.container";
import {translate} from 'react-i18nify';
import TextFieldGroup from '../../../common/TextFieldGroup/TextFieldGroup.component';

interface addressFormProps {
    formChange: (value: string, name: string) => void,
    formState: editorFormState,
    nextStep: () => void,
    previousStep: ()=> void,
}

 class AddressForm extends Component<addressFormProps, editorFormState> {


    constructor(props: addressFormProps) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e:ChangeEvent<HTMLInputElement>,name: string): void{
    this.props.formChange(e.currentTarget.value, name)
    }
    render (): JSX.Element {
        const {companyName, zipCode, address, website, websiteName} = this.props.formState;

        return <div className={'form-group'}>
                <h1 className="formTitle">{translate('editor.essentials')}</h1>
                <TextFieldGroup 
                    inputName="companyName" 
                    label={translate('editor.companyName.label')}  
                    value={companyName}  
                    highlightable={true} 
                    type="text" 
                    onChange={this.handleChange}
                />
                <TextFieldGroup 
                    inputName="zipCode" 
                    label={translate('editor.zipCode.label')}  
                    value={zipCode}  
                    highlightable={true} 
                    type="text" 
                    onChange={this.handleChange}
                />
                <TextFieldGroup 
                    inputName="address" 
                    label={translate('editor.address.label')}  
                    value={address}  
                    highlightable={true} 
                    type="text" 
                    onChange={this.handleChange}
                />
                <TextFieldGroup 
                    inputName="websiteName" 
                    label={translate('editor.websiteName.label')}  
                    value={websiteName}  
                    highlightable={true} 
                    type="text" 
                    onChange={this.handleChange}
                />
                <TextFieldGroup 
                    inputName="website" 
                    label={translate('editor.website.label')}  
                    value={website}  
                    highlightable={true} 
                    type="text" 
                    onChange={this.handleChange}
                />
                <button className="button button--primary" onClick={this.props.previousStep}>{translate('generic.previousStep')}</button>
                <button 
                    className="button button--primary" 
                    onClick={this.props.nextStep}>
                        {translate('generic.nextStep')}
                </button>
            </div>
    }



}

export default AddressForm;