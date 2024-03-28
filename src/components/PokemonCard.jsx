function PokemonCard({pokemon}){


    // console.log(pokemon);
    // const icon = pokemon.imgSrc

    return (

    <figure><img src={pokemon[0].imgSrc } alt={pokemon[0].name}/>
    <figcaption>{pokemon[0].name}</figcaption></figure>


    
)




}


export default PokemonCard;
