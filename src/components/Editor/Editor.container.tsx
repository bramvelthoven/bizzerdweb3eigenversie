import React, { Component } from 'react'
import './Editor.scss'
import TestTemplate from '../templates/TestTemplate/TestTemplate.component';
import SocialsForm from './EditorForm/SocialsForm/SocialsForm.component';
import CustomizationForm from "./EditorForm/CustomizationForm/CustomizationForm.component";
import PersonalForm from "./EditorForm/PersonalForm/PersonalForm.Component";
import AddressForm from "./EditorForm/AddressForm/AddressForm.Component";
import FinishingSteps from "./EditorForm/FinishingSteps/FinishingSteps.component";

type editorProps = {

}
export type editorFormState = {
    name: string,
    jobTitle: string,
    phoneNumber: string,
    email: string,
    companyName: string,
    zipCode: string,
    address: string,
    website: string,
    websiteName: string,
    activeStep: number,
    twitterLink: string,
    facebookLink: string,
    linkedInLink: string,
    instagramLink: string,
    secondaryBackgroundColor: string,
    backgroundColor: string,
    primaryColor: string,
    textColor: string,
    secondaryTextColor: string,
    logo: File,
    picture: File,
}

export default class Editor extends Component<editorProps, editorFormState>{


    constructor(props: editorProps) {
        super(props);

        this.state = {
            name: '',
            jobTitle: '',
            phoneNumber: '',
            email: '',
            companyName: '',
            zipCode: '',
            address: '',
            website: '',
            websiteName: '',
            twitterLink: '',
            facebookLink: '',
            linkedInLink: '',
            instagramLink: '',
            secondaryBackgroundColor: '#FFFFFF',
            backgroundColor: '#686868',
            primaryColor: '#D11219',
            textColor: '#444444',
            secondaryTextColor: '#000000',
            activeStep: 0,
            logo: new File([],'stock'),
            picture: new File([],'stock')

        }
        this.setChange = this.setChange.bind(this);
        this.nextStep = this.nextStep.bind(this);
        this.previousStep = this.previousStep.bind(this);
    }
    setChange(value: unknown, name: string): void{
        this.setState({
            ...this.state,
            [name]: value
        });
        console.log(this.state);
    }


    nextStep(): void {
       let amountOfSteps = 5;
      if (this.state.activeStep < amountOfSteps - 1) {
        this.setState({ activeStep: this.state.activeStep + 1 });
      }
    }

    previousStep(): void {
      if (this.state.activeStep > 0) {
        this.setState({ activeStep: this.state.activeStep - 1 });
      }
    }

    loadCorrectForm():JSX.Element | undefined {
      switch(this.state.activeStep) {
          case 0:
              return <PersonalForm formChange={this.setChange} nextStep={this.nextStep} formState={this.state}/>
          case 1:
              return <AddressForm formChange={this.setChange} nextStep={this.nextStep}  previousStep={this.previousStep} formState={this.state}/>
          case 2:
              return <SocialsForm formChange={this.setChange} nextStep={this.nextStep} previousStep={this.previousStep} formState={this.state}/>
          case 3:
              return <CustomizationForm formChange={this.setChange} formState={this.state} nextStep={this.nextStep} previousStep={this.previousStep}/>
          case 4:
              return <FinishingSteps formChange={this.setChange} formState={this.state} previousStep={this.previousStep} finish={this.previousStep}/>
      }
    }
    render() : JSX.Element {
        return (
            <>

                <div className="EditorContainer">

                    <div className="editorFormContainer">

                    {this.loadCorrectForm()}
                    </div>
                    <div className="cardContainer">
                    <TestTemplate formState={this.state}/>
                    </div>
                </div>
                </>
        )
    }

}
