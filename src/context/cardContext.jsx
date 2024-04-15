import React, { createContext, useEffect, useState } from "react";

const CardContext = createContext();

function CardContextProvider(props) {
    const [pokemonList, setPokemonList] = useState([]);

    useEffect(() => {
        const fetchPokemon = async () => {
            try {
                const response = await fetch('https://pokeapi.co/api/v2/pokemon');
                const data = await response.json();
                setPokemonList(data.results);
            } catch (error) {
                console.error('Error fetching Pokémon:', error);
            }
        };

        fetchPokemon(); 
    }, []);

    const removePokemon = (index) => {
        setPokemonList((prevList) => prevList.filter((_, i) => i !== index));
    };

    return (
        <CardContext.Provider value={{ pokemonList, removePokemon }}>
            {props.children}
        </CardContext.Provider>
    );
}

export { CardContext, CardContextProvider };

