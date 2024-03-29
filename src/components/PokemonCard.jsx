import PropTypes from "prop-types"

function PokemonCard({pokemon}){

    // console.log(pokemon);
    // const icon = pokemon.imgSrc

    return (

    <figure><img src={pokemon[0].imgSrc } alt={pokemon[0].name}/>
    <figcaption>{pokemon[0].name}</figcaption></figure>
)

PokemonCard.propTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.string.isRequired,
        imgSrc: PropTypes.object,
    }).isRequired
}




}


export default PokemonCard;
