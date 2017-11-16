import React, { Component } from 'react';
import { debug } from 'util';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this._getValue = this._getValue.bind(this);
    this._updateState = this._updateState.bind(this);
  }
  render() {
    return (
      <div>
        <button>Get Name</button>
        <input type="text" value={this.state.value}/>
      </div>
    );
  }
  _updateState(value) {
    this.setState({
      value:value
    })
  }
  _getValue() {
    var data = null;
    var func = this._updateState;
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        func(this.responseText);
      }
    });
    xhr.open("GET", "http://localhost:8000/name");
    xhr.send(data);
  }
}