import React from 'react';
import './App.css';
import PokemonList from './components/PokemonList'; 
import { CardContextProvider } from './context/cardContext';

function App() {
    return (
        <div className="App">
            <CardContextProvider>
                <PokemonList />
            </CardContextProvider>
        </div>
    );
}

export default App;

