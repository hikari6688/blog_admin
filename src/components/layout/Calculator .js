import React from 'react';
import BoilingVerdict from './BoilingVerdict ';
import TemperatureInput from './TemperatureInput ';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: '37',
      scale: 'c'
    };
  }
  handleTemperatureCahnge=(newVal)=>{
    this.setState({ temperature:newVal })
  }
  render() {
    return (
      <div>
        <TemperatureInput scale="c" temperature={ this.state.temperature } onTemperatureCahnge={ this.handleTemperatureCahnge } />
        <TemperatureInput scale="f" temperature={ this.state.temperature } onTemperatureCahnge={ this.handleTemperatureCahnge }/>
      </div>
    );
  }
}
export default Calculator;
