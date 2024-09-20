import React from 'react';

function PokemonCard({ pokemon }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
      <img className="w-24 h-24" src={pokemon.sprites.front_default} alt={pokemon.name} />
      <h2 className="text-xl font-bold mt-4">{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
      <p className="text-sm">Height: {pokemon.height}</p>
      <p className="text-sm">Weight: {pokemon.weight}</p>
      <p className="text-sm">Type: {pokemon.types.map(typeInfo => typeInfo.type.name).join(', ')}</p>
    </div>
  );
}

export default PokemonCard;
