import React, {ChangeEvent, Component} from 'react'
import './SocialsForm.scss'
import {editorFormState} from "../../Editor.container";
import {translate} from 'react-i18nify';
import TextFieldGroup from '../../../common/TextFieldGroup/TextFieldGroup.component';
interface essentialsFormProps {
    formChange: (value: string, name: string) => void,
    formState: editorFormState,
    nextStep: ()=> void,
    previousStep: ()=> void,
}

 class SocialsForm extends Component<essentialsFormProps, editorFormState> {


    constructor(props: essentialsFormProps) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e:ChangeEvent<HTMLInputElement>,name: string): void{
    this.props.formChange(e.currentTarget.value, name)
    }
    render (): JSX.Element {
        const {twitterLink, facebookLink, linkedInLink, instagramLink} = this.props.formState;

        return <form className={'form-group'}>
                <h1 className="formTitle">{translate('editor.socialMedia')}</h1>
                <TextFieldGroup inputName="twitterLink" label={translate('editor.twitter.label')} value={twitterLink} highlightable={true} type="text" onChange={this.handleChange}/>
                <TextFieldGroup inputName="facebookLink" label={translate('editor.facebook.label')}  value={facebookLink}  highlightable={true} type="text" onChange={this.handleChange}/>
                <TextFieldGroup inputName="linkedInLink" label={translate('editor.linkedIn.label')}  value={linkedInLink}  highlightable={true} type="text" onChange={this.handleChange}/>
                <TextFieldGroup inputName="instagramLink" label={translate('editor.instagram.label')}  value={instagramLink}  highlightable={true} type="text" onChange={this.handleChange}/>
                <button className="button button--primary" onClick={this.props.previousStep}>{translate('generic.previousStep')}</button>
                <button className="button button--primary" onClick={this.props.nextStep}>{translate('generic.nextStep')}</button>
                </form>
    }



}

export default SocialsForm;