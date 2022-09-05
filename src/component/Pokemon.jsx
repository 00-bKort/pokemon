import React, { useEffect, useState } from "react";
import axios from "axios";

const Pokemon = ({ thisPokemon }) => {

  const [onePokemon, setOnePokemon] = useState({
    name: '',
    sprites: {
      front_default: ''
    }
  })

  const getPokemon = (url) => {
    axios.get(url)
      .then((response) => {
        console.log(response);
        setOnePokemon(response.data)
      })
      .catch((error) => console.log(error))
  }

  useEffect(() => {
    getPokemon(thisPokemon.url)
  }, [])

  return (
    <div>
      <div className="flex flex-col items-center p-6 transition-colors duration-200 transform cursor-pointer group hover:bg-blue-600 rounded-xl">
        <img className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src={onePokemon.sprites.front_default} alt=""></img>
        <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">{onePokemon.name}</h1>
        <div className="w-full justify-evenly flex mt-5">
          <div className="flex flex-col justify-center items-center">
            <h5 className="text-gray-400"> height </h5>
            <p className="bg-slate-800 text-gray-300 text-sm w-10 h-10 rounded-full flex justify-center items-center">{onePokemon.height}</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h5 className="text-gray-400">exp</h5>
            <p className="bg-slate-800 text-gray-300 text-sm w-10 h-10 rounded-full flex justify-center items-center">{onePokemon.base_experience}</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h5 className="text-gray-400">weight</h5>
            <p className="bg-slate-800 text-gray-300 text-sm w-10 h-10 rounded-full flex justify-center items-center">{onePokemon.weight}</p>
          </div>
        </div>
      </div>
    </div>
  )

}

export default Pokemon;