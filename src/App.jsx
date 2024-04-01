import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PokemonCard from './components/PokemonCard'

function App() {

  // const [currentIndex, setCurrentIndex] = useState(0);

  // const previousPokemon = () => {
  //   if (currentIndex > 0 ){
  //   setCurrentIndex(currentIndex - 1)};
  // }

  // const nextPokemon =() => {
  //   if (currentIndex < pokemon.length -1){
  //     setCurrentIndex(currentIndex + 1)
  //   }
  // }

  const [pokemonIndex, setPokemonIndex] = useState(0);

  const handleClick = () => {
    setPokemonIndex(pokemonIndex + 1)
  }

  const clickPrvious = () => {
    setPokemonIndex(pokemonIndex -1)
  }







  const pokemon = [
    {
        name: "bulbasaur",
        imgSrc:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
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
        name:"mew",
    }
  ];

  return (

    
    <>
      <div>
        <PokemonCard pokemon={pokemon[pokemonIndex]}/>
        {pokemonIndex > 0 ? <button onClick={clickPrvious}>Précedent</button> : null}
        {pokemonIndex < pokemon.length -1 ? <button onClick={handleClick}>Suivant</button> : null}
      </div>
    </>
  );
}



export default App;
