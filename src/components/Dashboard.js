import React, {Component} from 'react'

import PokeCard from './pokemon/PokeCard'
//import Loading from './layouts/loading'



class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemons : [],
      pokemonDetails : [],
      offset: 0,
      loadNumber: 20   
    }
    this.handleMoreClick = this.handleMoreClick.bind(this);
  }

  getNextOffset() {
    return this.state.offset+this.state.loadNumber;
  }

  handleMoreClick(event) {
    //const {name, value} = event.target;
    const newOffset = this.getNextOffset();

    this.setState({offset: newOffset}, () => {
      console.log("Offset: " + this.state.offset)
      this.getMorePokemon();
    });
    
  }
  
  componentDidMount() {
    this.getMorePokemon();
  }

  getMorePokemon() {
    if(this.state.offset < 700){
      let url = "https://pokeapi.co/api/v2/pokemon?offset=" + this.state.offset + "&limit=" + this.state.loadNumber;
      fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data) {
          this.setState({pokemons : data.results})

          this.state.pokemons.map(pokemon => {
            fetch(pokemon.url)
            .then(response => response.json())
            .then(data => {
              if (data) {
                var temp = this.state.pokemonDetails
                temp.push(data)
                this.setState({pokemonDetails: temp})
              }            
            })
            .catch(console.log)
          })
        }
      })
      .catch(console.log)
    }
  }

  render() {
    const {pokemonDetails} = this.state;

    const renderedPokemonList = pokemonDetails.sort((a, b) => a.id - b.id).map((pokemon, index) => {
      return (<PokeCard pokemon={pokemon} />);
    });

    return (
      <div>
        <div className="container pokemon-list">
          <div className="d-flex align-content-start flex-wrap" style={{ 'padding': "5px"}}>
            { renderedPokemonList }
          </div>
        </div>
        <button type="button" className="btn btn-primary" key="more-button" id="more-button" onClick={this.handleMoreClick}>Load More</button>
      </div>
    );
  }
}

export default App;