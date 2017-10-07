import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import 'italia-design-react/lib/index.css';
import {Button} from 'italia-design-react';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to Design React Demo</h1>
                </header>
                <p className="App-intro">
                    <Button>Pulsante importato</Button>
                </p>
            </div>
        );
    }
}

export default App;
