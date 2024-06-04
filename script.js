// Example: Fetch Pokémon data
const getPokemonData = async (pokemonName) => {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        // Process data (e.g., display name, image, type)
        console.log(data);
    } catch (error) {
        console.error('Error fetching Pokémon data:', error);
    }
};

// Example usage
getPokemonData('pikachu');
