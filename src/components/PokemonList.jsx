import React, { useContext, useState } from 'react';
import { CardContext } from '../context/cardContext';
import './PokemonList.css'; 
import PokemonButton from './PokemonButton'; 

export default function PokemonList() {
    const { pokemonList, setPokemonList, removePokemon } = useContext(CardContext);
    const [isLoading, setIsLoading] = useState(false);
    const [isListLoaded, setIsListLoaded] = useState(false);

    const fetchPokemon = async () => {
        setIsLoading(true);
        try {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon');
            const data = await response.json();
            setPokemonList(data.results);
        } catch (error) {
            console.error('Error fetching Pokémon:', error);
        }
        setIsLoading(false);
    };

    return (
        <div className="pokemon-container">
            <h1>Listado de Pokémon</h1>
            {!isListLoaded && (
                <PokemonButton onClick={fetchPokemon} isLoading={isLoading} setIsListLoaded={setIsListLoaded} />
            )}
            {isListLoaded && (
                <div className="pokemon-list">
                    {pokemonList.map((pokemon, index) => (
                        <div key={index} className="pokemon">
                            <h2>{pokemon.name}</h2>
                            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`} alt={pokemon.name} />
                            <button onClick={() => removePokemon(index)}>Eliminar</button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}








