import React from 'react'
import { ColorResult, ChromePicker } from 'react-color'
import './ColorPicker.scss'


interface colorPickerProps {
  color: string,
  onChange: (color: string, name: string) => void,
  name: string,
  label: string
}
interface colorPickerState {
  displayColorPicker: boolean
}
class ColorPicker extends React.Component<colorPickerProps, colorPickerState> {
  

  constructor(props: colorPickerProps) {
    super(props);
    this.state = {
      displayColorPicker: false,
    }
  }

  handleClick = (): void => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker })
  };

  handleClose = (): void => {
    this.setState({ displayColorPicker: false })
  };

  handleChange = (color: ColorResult): void => {
    this.props.onChange(color.hex, this.props.name);
  };

  render(): JSX.Element { 
    console.log(this.props.label);
    return (
      <div className="colorPickerContainer"> 
        <div className="label">{this.props.label}</div>
        <div className="swatch" onClick={ this.handleClick }>
          <div className="color" style={{backgroundColor:this.props.color}}/>
        </div>
        { this.state.displayColorPicker ? <div  className="popover">
          <div  className="cover" onClick={ this.handleClose }/>
          <ChromePicker color={this.props.color} onChange={ this.handleChange } />
        </div> : '' }

      </div>
    )
  }
}

export default ColorPicker