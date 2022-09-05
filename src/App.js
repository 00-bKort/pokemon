import React, { useEffect, useState } from "react";
import axios from 'axios'
import DisplayPokemon from './component/DisplayPokemon'
import Pokemon from "./component/searchPokemon";

function App() {

  const [pokemon, setPokemon] = useState([])

  const getPokemon = () => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon')
      .then((response) => {
        setPokemon(response.data.results)
      })
      .catch((error) => console.log(error))
  }

  useEffect(() => {
    getPokemon()
  }, [])

  return (
    <div className="bg-white dark:bg-gray-900">
      <h1 className="text-white py-5 pr-16 text-4xl text-center">POKEMON API</h1>

      <div className="flex justify-evenly">
        <Pokemon></Pokemon>
        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3">
          <DisplayPokemon pokemon={pokemon} ></DisplayPokemon>
        </div>
      </div>
    </div>
  )
}

export default App;