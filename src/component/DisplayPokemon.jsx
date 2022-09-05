import React from "react";
import Pokemon from "./Pokemon";

const DisplayPokemon = ({ pokemon }) => {
  return (
    <>
      {
        pokemon.map((val, idx) => {
          return (
            <>
              <Pokemon key={idx} thisPokemon={val} />
            </>
          )
        }
        )
      }
    </>
  )
}

export default DisplayPokemon;