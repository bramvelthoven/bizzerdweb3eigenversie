import React, {ChangeEvent, Component} from 'react'
import './FinishingSteps.scss'
import {editorFormState} from "../../Editor.container";
import {translate} from 'react-i18nify';

interface personalFormProps {
    formChange: (value: string, name: string) => void,
    formState: editorFormState,
    previousStep: () => void,
    finish: () => void,
}

class FinishingSteps extends Component<personalFormProps, editorFormState> {


    constructor(props: personalFormProps) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e:ChangeEvent<HTMLInputElement>,name: string): void{
        this.props.formChange(e.currentTarget.value, name)
    }
    render (): JSX.Element {


        return <div className={'form-group'}>
            <h1 className="formTitle">{translate('editor.finishingSteps')}</h1>

            <p>Gefeliciteerd je hebt een kaartje aangemaakt! vergeet niet te controleren of alles er in staat.</p>
            <button
                className="button button--primary"
                onClick={this.props.previousStep}>
                {translate('generic.previousStep')}
            </button>
            <button
                className="button button--primary"
                onClick={this.props.finish}>
                {translate('generic.finish')}
            </button>
        </div>
    }



}

export default FinishingSteps;