import React from 'react';

const PokemonButton = ({ onClick, isLoading, setIsListLoaded }) => {
    const handleClick = async () => {
        await onClick();
        setIsListLoaded(true); 
    };

    return (
        <button onClick={handleClick} disabled={isLoading}>
            {isLoading ? 'Cargando...' : 'Cargar Pokémon'}
        </button>
    );
}

export default PokemonButton;

