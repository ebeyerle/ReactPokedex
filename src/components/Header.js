import React from 'react'

const Header = () => {
    return (
        
        <nav className="navbar navbar-expand-md nav-color">
            <div className="col-md-4 text-md-right text-center">
                <img 
                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/39.png" 
                    alt="" 
                    style={{ width: '5em', height: '5em' }}
                    className="d-inline" 
                />
            </div>
            <div className="col-md-4  text-center">
                <center>
                    
                    <h1>Pokédex</h1>
                    <h6>A React page using the PokéAPI</h6>
                    
                
                </center>
            </div>
            <div className="col-md-4 text-md-left text-center">
                <img 
                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png" 
                    alt="" 
                    style={{ width: '5em', height: '5em' }}
                    className="d-inline" 
                />
            </div>
            
            
            
        </nav>
        
    )
};

export default Header