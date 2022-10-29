const offset = 0;
const limit = 9;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

function convertPokemonHTML(pokemon) {
    return `
    <li class="pokemon-item">
        <span class="pokemon-number">${pokemon}</span>
        <span class="pokemon-name">${pokemon.name}</span>

        <div class="pokemon-detail">
            <ol class="pokemon-type">
                <li>grass</li>
                <li>poison</li>
            </ol>

            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
                        alt="${pokemon.name}">
        </div>
    </li>
        `
}

const list = document.getElementById('list');

fetch(url)
    .then((res) => res.json())
    .then((resBody) => resBody.results)
    .then((pokemonList) => {
        for (let i = 0; i < pokemonList.length; i++) {
            const pokemon = pokemonList[i];
            list.innerHTML += convertPokemonHTML(pokemon);             
        }
    })
    .catch((error) => console.log(error))
    .finally(() => console.log('Requisição concluida'))