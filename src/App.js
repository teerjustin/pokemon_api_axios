
import './App.css';
import React, { useEffect, useState } from  'react';
import axios from 'axios';

function App() {

  const [pokemon, setPokemon] = useState([]);
  const [pokemonRender, setPokemonRender] = useState([]);

  useEffect( () => {

  //vanilla js
  //   fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=807")
  //   .then(response => {
  //       return response.json();
  //   }).then(response => {
  //       console.log(response);
  //       setPokemon(response.results)
  //   }).catch(err=>{
  //       console.log(err);
  //   });


    //axios
    axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=807")
      .then(res => {
        console.log(res.data.results);
        setPokemon(res.data.results)
      })
      .catch(err => console.log(err))
  }, [])






  const onClick = e => {
    console.log(pokemon);
    setPokemonRender([...pokemon]);
  }

  return (
    <div className="App">
      <button name="fetchPokemon" onClick={onClick}> Fetch Pokemon</button>
      {
        pokemonRender.map((poke,idx) => {
          return <p key={idx}>{poke.name}</p>
        })
      }
    </div>
  );
}


export default App;
