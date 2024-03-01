export async function requestPokemon(url) {
    const res = await fetch(url);
    const json = await res.json();
    const pokemonList = json.results
    const pokemonDataArray = []
    for (const pokemon of pokemonList) {
        const pokemonDataObject = await FetchPokemonData(pokemon)
        pokemonDataArray.push(pokemonDataObject)
    }
    return pokemonDataArray
};

async function FetchPokemonData(p) {
    const res = await fetch(p.url)
    const pokemonDataJson = await res.json()
    const { id, name, types, sprites } = pokemonDataJson
    const sprite = sprites.front_default
    const [firstTypeObject, secondTypeObject] = types
    const { type: { name: firstType } } = firstTypeObject
    const { type: { name: secondType } = { name: "NYE" } } = secondTypeObject || {};
    return { id, name, firstType, secondType, sprite }
}
