import { useState } from "react";
import "./App.css";
import PokemonCard from "./components/PokemonCard";
import NavBar from "./components/NavBar";

function App() {

  const [index, setIndex] = useState(0);

  const suivant = () => {
    setIndex((index + 1) % pokemon.length);
  };

  const precedent = () => {
    setIndex((index - 1 + pokemon.length) % pokemon.length);
  };

  const pokemon = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

  return (
    <>
      <div>
        <NavBar suivant={suivant} precedent={precedent} />
        <PokemonCard pokemon={pokemon[index]} />
      </div>
    </>
  );
}

export default App;
