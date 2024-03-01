import { useEffect } from "react"
import { useState } from "react"
import Pokemon from "./Pokemon";
import './styles.css';
const URL = `https://pokeapi.co/api/v2/pokemon?limit=500&offset=0`
function Card() {
    const [pokemon, setPokemon] = useState([])
    useEffect(() => {
        requestPokemon(URL);
    }, []);

    async function requestPokemon(url) {
        const res = await fetch(url);
        const json = await res.json();
        const pokemonList = json.results
        const pokemonDataArray = []
        for (const pokemon of pokemonList) {
            const pokemonDataObject = await FetchPokemonData(pokemon)
            pokemonDataArray.push(pokemonDataObject)
        }
        setPokemon(pokemonDataArray);
    };

    return (
        <div className="pokedex_container">
            {pokemon.map((pkmn) => (
                <Pokemon key={pkmn.id} id={pkmn.id} name={pkmn.name} firstType={pkmn.firstType} secondType={pkmn.secondType} sprite={pkmn.sprite} cry={pkmn.cry} />
            ))}
        </div>
    )
}
async function FetchPokemonData(p) {
    const res = await fetch(p.url)
    const pokemonDataJson = await res.json()
    const { id, name, types, sprites, cries } = pokemonDataJson
    const sprite = sprites.other["official-artwork"].front_default
    const [firstTypeObject, secondTypeObject] = types
    const { type: { name: firstType } } = firstTypeObject
    const { type: { name: secondType } = { name: "" } } = secondTypeObject || {};
    const cry = cries.latest
    return { id, name, firstType, secondType, sprite, cry }
}
export default Card
