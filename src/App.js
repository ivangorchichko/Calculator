import React, { Component } from 'react';
import "./App.css";
import Button from './components/buttons/Button';
import Input from './components/input/Input';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      input: "0",
    };
  }

  render() {
    return (
      <div className="app">
        <div className="calc">
          <div className="row">
            <Input input={this.state.input} />
          </div>
          <div className="bg-digits">
            <div className="row">
              <Button value="C" />
              <Button value="+/-" />
              <Button value="%" />
              <Button value="&divide;" />
            </div>
            <div className="row">
              <Button value="7" />
              <Button value="8" />
              <Button value="9" />
              <Button value="&times;" />
            </div>
            <div className="row">
              <Button value="4" />
              <Button value="5" />
              <Button value="6" />
              <Button value="-" />
            </div>
            <div className="row">
              <Button value="1" />
              <Button value="2" />
              <Button value="3" />
              <Button value="+" />
            </div>
            <div className="row">
              <Button value="0" />
              <Button value="." />
              <Button value="=" />
            </div>
          </div>
        </div>
      </div >
    );
  }
}

export default App;