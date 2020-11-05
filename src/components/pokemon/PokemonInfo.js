import React,{Component} from "react";

const TYPE_COLORS = {
    bug: 'B1C12E',
    dark: '4F3A2D',
    dragon: '755EDF',
    electric: 'FCBC17',
    fairy: 'F4B1F4',
    fighting: 'ab5b55',
    fire: 'E73B0C',
    flying: 'A3B3F7',
    ghost: '6060B2',
    grass: '74C236',
    ground: 'D3B357',
    ice: 'A3E7FD',
    normal: 'C8C4BC',
    poison: '934594',
    psychic: 'ED4882',
    rock: 'B9A156',
    steel: 'B5B5C3',
    water: '3295F6'
  };

const PokemonInfo = ({pokemon}) => {

    const types = pokemon.types.map(type => type.type.name)
    const height = Math.round((pokemon.height * 0.328084 + 0.00001) * 100) / 100;
    const weight = Math.round((pokemon.weight * 0.220462 + 0.00001) * 100) / 100;

    return(
        <div className="pokemonInfo-Page">
            <div className="card-header">
                <div className="row">
                    <div className="col-4">
                        <h5>{pokemon.id}</h5>
                    </div>
                    <div className="col-8 text-right">
                        <h5>{pokemon.name.toLowerCase()
                            .split(' ')
                            .map(s => s.charAt(0).toUpperCase() + s.substring(1))
                            .join(' ')}</h5>
                    </div>
                </div>
            </div>

            <div className="row align-items-center">
              <div className=" col-md-3 ">
                    <img 
                        style={{'height': '240px'}}
                        src={pokemon.sprites.front_default} 
                    />
                    {types.map(type => (
                    <span
                      key={type}
                      className="badge badge-pill mr-1"
                      style={{
                        backgroundColor: `#${TYPE_COLORS[type]}`,
                        color: 'white'
                      }}
                    >
                      {type
                        .toLowerCase()
                        .split(' ')
                        .map(s => s.charAt(0).toUpperCase() + s.substring(1))
                        .join(' ')}
                    </span>
                    ))}
              </div>
              <div className=" col-md-9 text-right">
                <p><strong>Height:</strong>{height}'ft</p>
                <p><strong>Weight:</strong>{weight} lbs.</p>
                <p><strong>Ability:</strong>{pokemon.abilities[0].ability.name.toLowerCase()
                            .split(' ')
                            .map(s => s.charAt(0).toUpperCase() + s.substring(1))
                            .join(' ')}</p>
              </div>
            </div>
            
        </div>
    )
}

export default PokemonInfo