document.getElementById('pokemonForm').addEventListener('submit', async function (event) {
    event.preventDefault();
  
    const pokemonName = document.getElementById('pokemon_name').value.toLowerCase();
  
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      const data = await response.json();
  
      if (response.ok) {
        const pokemonData = {
          name: data.name,
          ability: data.abilities[0].ability.name,
          stats: {
            HP: data.stats[0].base_stat,
            Attack: data.stats[1].base_stat,
            Defense: data.stats[2].base_stat
          },
          sprite: data.sprites.front_default
        };
  
        document.getElementById('name').textContent = pokemonData.name;
        document.getElementById('ability').textContent = pokemonData.ability;
        document.getElementById('hp').textContent = pokemonData.stats.HP;
        document.getElementById('attack').textContent = pokemonData.stats.Attack;
        document.getElementById('defense').textContent = pokemonData.stats.Defense;
        document.getElementById('sprite').src = pokemonData.sprite;
  
        document.getElementById('pokemonData').style.display = 'block';
      } else {
        document.getElementById('pokemonData').style.display = 'none';
      }
    } catch (error) {
      console.error('Error fetching Pokemon data:', error.message);
    }
  });
  