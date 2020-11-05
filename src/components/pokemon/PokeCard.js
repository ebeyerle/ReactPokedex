import React, {Component,useEffect, useState} from 'react'
import {Link} from "react-router-dom"

const PokeCard = ({pokemon}) => {

  const [imgLoading, setLoad] = useState(true)

    return (
    <>
    <Link to={`pokemon/${pokemon.name}`}>
      <div className="card text-center mx-auto poke-Card" 
            style={{ margin: "5px" }}
            key={pokemon.id}
      >
        <div className="card-body">
          <h6 className="card-subtitle mb-2 text-muted"><b>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</b></h6>
          <h6 className="card-subtitle mb-2 text-muted">No. {pokemon.id}</h6> 

          {imgLoading ? (
            <img 
              src={'https://media0.giphy.com/media/3oEjI6SIIHBdRxXI40/200.gif'}
              style={{ width: '5em', height: '5em' }}
              className="card-img-top rounded mx-auto d-block mt-2"
            />
          ) : null}

          <img 
            style={{'height': '60px'}}
            src={pokemon.sprites.versions['generation-viii'].icons['front_default']}
            onLoad={()=>setLoad(false)}
           /> 

        </div>
      </div>
    </Link>
    </>  
    )
};

export default PokeCard