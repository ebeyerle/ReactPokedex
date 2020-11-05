import React, {Component} from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import "./App.css"

import Header from './components/Header'
import Footer from './components/Footer'
import Dashboard from './components/Dashboard'
import PokemonData from './components/pokemon/PokemonData'
import Error from './components/Error'


class App extends Component {
  
  render() {
    return (
      <div>
      <Router>  
        <div className="App" style={{'background-color': 'rgb(71, 197, 247)'}}>
        <Header />        
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route exact path='/pokemon/:pokemonIndex' component={PokemonData} />
          <Route component={Error} />
        </Switch>
        
        </div>
        <Footer />
      </Router>
      </div>
      
    );
  }
}

export default App;