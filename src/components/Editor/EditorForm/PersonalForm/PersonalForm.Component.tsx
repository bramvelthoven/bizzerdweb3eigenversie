import React, {ChangeEvent, Component} from 'react'
import './PersonalForm.scss'
import {editorFormState} from "../../Editor.container";
import {translate} from 'react-i18nify';
import TextFieldGroup from '../../../common/TextFieldGroup/TextFieldGroup.component';

interface personalFormProps {
    formChange: (value: string, name: string) => void,
    formState: editorFormState,
    nextStep: () => void,
}

 class PersonalForm extends Component<personalFormProps, editorFormState> {


    constructor(props: personalFormProps) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e:ChangeEvent<HTMLInputElement>,name: string): void{
    this.props.formChange(e.currentTarget.value, name)
    }
    render (): JSX.Element {
        const {name,jobTitle, phoneNumber, email} = this.props.formState;

        return <div className={'form-group'}>
                <h1 className="formTitle">{translate('editor.essentials')}</h1>
                <TextFieldGroup 
                    inputName="name" 
                    label={translate('editor.name.label')} 
                    value={name} 
                    highlightable={true} 
                    type="text" 
                    onChange={this.handleChange}
                />
                <TextFieldGroup 
                    inputName="jobTitle" 
                    label={translate('editor.jobTitle.label')}  
                    value={jobTitle}  
                    highlightable={true} 
                    type="text" 
                    onChange={this.handleChange}
                />
                <TextFieldGroup 
                    inputName="phoneNumber" 
                    label={translate('editor.phoneNumber.label')}  
                    value={phoneNumber}  
                    highlightable={true} 
                    type="text" 
                    onChange={this.handleChange}
                    />
                <TextFieldGroup 
                    inputName="email" 
                    label={translate('editor.email.label')}  
                    value={email}  
                    highlightable={true} 
                    type="text"
                    onChange={this.handleChange}
                />
                <button 
                    className="button button--primary" 
                    onClick={this.props.nextStep}>
                        {translate('generic.nextStep')}
                </button>
            </div>
    }



}

export default PersonalForm;