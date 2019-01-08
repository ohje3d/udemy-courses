import React, { Component } from 'react';
import './App.css';
import {Validation} from "./ValidationComponent";
import {Char} from "./CharComponent";


const uniqueChars = (str) => {
  let uc = [];
  str.split('').forEach(c => {
    if(uc.indexOf(c) === -1) {
      uc.push(c)
    }
  })
  return uc;
}

class App extends Component {
  state = {
    input: ''
  }

  updateInput = (event) => {
    this.setState({
      input: event.target.value
    })
  }

  removeChar = (char) => {
    // remove all occurrences by using a regExp with global modifier
    const regExp = new RegExp(char, 'g')
    const shortenedInput = this.state.input.replace(regExp, '');

    this.setState({
      input: shortenedInput
    })
  }

  render() {
    const currentInput = this.state.input;
    const inputLength =  currentInput.length;
    // depends how "different letter" is interpreted
    // I decided to remove duplicates, which makes "kex" assignment also easier
    const chars = uniqueChars(currentInput)

    return (
      <div className="App">
        <header className="App-header">
          <input
            type="text"
            value={this.state.input}
            onChange={this.updateInput}
          />
          {
            /* only render validation component when there is any input */
            inputLength
            ? <Validation inputLength={inputLength}/>
            : null
          }
        </header>
        <main>
          <p>
            Length: {inputLength}
          </p>
          {currentInput && currentInput.length
              ? chars.map(c => {
                return (<Char
                    key={`char-${currentInput}-${c}`}
                    character={c}
                    onClick={() => this.removeChar(c)} />)
                })
              : null
          }
        </main>
      </div>
    );
  }
}

export default App;
