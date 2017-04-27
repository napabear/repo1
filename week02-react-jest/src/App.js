import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    constructor() {
        super();
        this.state = {
            nine: '0',
            firstName: 'unknown',
            lastName: 'unknown'
        }
    }



    getNine = () => {
        this.setState({
            nine: '9'
        })
    };

    setAddress = () => {
        this.setState({
            firstName: 'Patty',
            lastName: 'Cat'
        })
    };

    render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
            Nine: {this.state.nine}
        </p>
          <button className='elf' onClick={this.getNine}>Get Nine</button>
          {/*<p className="App-intro">*/}
              {/*firstName: {this.state.firstName}*/}
          {/*</p>*/}
          {/*<p className="App-intro">*/}
              {/*lastName: {this.state.lastName}*/}
          {/*</p>*/}
          {/*<button className="setAddress" onClick={this.setAddress}>Set Address</button>*/}

      </div>
    );
  }
}

export default App;
