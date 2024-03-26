function PokemonCard(){

    const pokemon = pokemonList[0]
    console.log(pokemon);
    // const icon = pokemon.imgSrc

    return (

    <figure><img src={pokemon === pokemonList[0] ? pokemon.imgSrc : "???"} alt={pokemon.name}/>
    <figcaption>{pokemon.name}</figcaption></figure>
    
)




}

const pokemonList = [
    {
        name: "bulbasaur",
        imgSrc:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
        name:"mew",
    }
];

export default PokemonCard;
