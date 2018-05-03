import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import TodosContainer from './containers/TodosContainer';
import Header from './components/Header';
import MyRoutes from './config/routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <section className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Another To Do</h1>
      </section>

         <Header/>
         {MyRoutes}

      </div>
    );
  }
}

export default App;
