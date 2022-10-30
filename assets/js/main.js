function convertPokemonHTML(pokemon) {
    return `
    <li class="pokemon-item ${pokemon.type}">
        <span class="pokemon-number">#${pokemon.order}</span>
        <span class="pokemon-name">${pokemon.name}</span>

        <div class="pokemon-detail">
            <ol class="pokemon-type">
                ${pokemon.types.map((type) => `<li class>${type}</li>`).join('')}
            </ol>

            <img src="${pokemon.photo}"
                alt="${pokemon.name}">
        </div>
    </li>
        `
}

const list = document.getElementById('list');

pokeApi.getPokemons().then((pokemonList = []) => {
    list.innerHTML += pokemonList.map(convertPokemonHTML).join('');
})