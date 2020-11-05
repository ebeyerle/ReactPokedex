import React, { Component } from "react";
import {Link} from "react-router-dom";
import PokemonInfo from "./PokemonInfo";

class PokemonData extends Component{
    constructor(){
        super()
        this.state = {
            pokemonLink: "",
            pokemonData: []
        }
    }

    async componentDidMount() {
        const { pokemonIndex } = this.props.match.params;
        const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonIndex}/`;

        this.setState({pokemonLink: pokemonUrl})

        fetch(pokemonUrl)
          .then(response => response.json())
          .then(data => {
            if (data) {
              var temp = this.state.pokemonData
              temp.push(data)
              this.setState({pokemonData: temp})
            }            
          })
          .catch(console.log)
    }

    render(){

        const {pokemonData} = this.state;

        const renderedPokemonList = pokemonData.sort((a, b) => a.id - b.id).map((pokemon, index) => {
        return (<PokemonInfo pokemon={pokemon} />);
        });

        return(
            <div>
                <div className='container'>
                <Link to={`/`}>
                    <button
                     style={{'margin-top': '10px'}}
                     type="button" className="btn btn-primary" key="more-button" id="more-button">Back</button>
                </Link>
                    <div className='detailsBox'>
                        <h2> {renderedPokemonList} </h2>
                    </div>
                </div>
            </div>
        )
    }
}

export default PokemonData;