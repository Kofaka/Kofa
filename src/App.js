import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to Kofa.codes</h1>
        </header>
        <div className="App-intro">
          <p>
            My name is Daria Babakova (aka <b>Kofa</b>).
            This is my personal page and for now its
            <br/>
            <span className="App-intro__attention">
              <span
                className="App-intro__builder-man App-intro__builder-man_left"
                role="img"
                aria-label="Builder man"
              >
                👷
              </span>
              {' under construction '}
              <span
                className="App-intro__builder-man App-intro__builder-man_right"
                role="img"
                aria-label="Builder man"
              >
                👷
              </span>
          </span>
          </p>
          <p className="App-intro__caption">
            You can contact me via {' '}
            <a
              href="https://www.facebook.com/kofa.maeww"
              className="App-link"
              rel="noopener noreferrer"
              target="_blank"
            >
              Facebook
            </a>
            {' '} or {' '}
            <a
              href="https://www.linkedin.com/in/kofaka/"
              className="App-link"
              rel="noopener noreferrer"
              target="_blank"
            >
              Linkedin
            </a>
          </p>
        </div>
        <i className="comodo-logo" />
      </div>
    );
  }
}

export default App;
