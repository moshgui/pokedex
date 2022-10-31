const list = document.getElementById('list');
const loadMoreButton = document.getElementById('loadMoreButton');
const limit = 10;
let offset = 0;

function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon-item ${pokemon.type}">
            <span class="pokemon-number">#${pokemon.order}</span>
            <span class="pokemon-name">${pokemon.name}</span>
            <div class="pokemon-detail">
                <ol class="pokemon-type">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>
                <img src="${pokemon.photo}"
                     alt="${pokemon.name}">
            </div>
        </li>
    `
}

function loadMorePokemons(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToLi).join('')
        list.innerHTML += newHtml
    })
}

loadMorePokemons(offset, limit);

loadMoreButton.addEventListener('click', () => {
    offset += limit;
    loadMorePokemons(offset, limit)
})