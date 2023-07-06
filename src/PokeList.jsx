import { useState, useContext } from "react";
import React from "react";
import PokeCard from "./PokeCard";
import { DarkModeContext } from "./Context";
import { useEffect } from "react";
import axios from "axios";


export default function PokeList() {

   const [listpokemon, setListPokemon] = useState([])
   const urlPokemon = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0";

   useEffect(() => {
      axios.get(urlPokemon).then(response => {
         setListPokemon(response.data.results)
      });
   }, []);
   console.log(listpokemon);


   return (
      <>
         {listpokemon.map((pokemon, index) => {
            return (
              <PokeCard index={index} name={pokemon.name}/>
            )
         })}
      </>

   )
}
