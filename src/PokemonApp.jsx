
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemons } from './slices/pokemon/thunks'

export const PokemonApp = () => {

  const dispatch = useDispatch();
  /**the useSelector function is responsible for
   * selecting a part of the Redux's store state.
   * NOTE: it receives the current state and returns a part of
   * state or derived data.
   */
  const {loading, pokemons = [], page} = useSelector(state => state.pokemons);

  useEffect(()=>{
    // calling the thunk: getPokemons
    dispatch(getPokemons(0));
  },[dispatch])

  return (
    <>
        <h1>Pokémon App</h1>
        <hr/>
        <span>Loading...{loading ? 'true':'false'}</span>
        <ul>
            {
              pokemons.map((pokemon)=>{
                return <li key={pokemon.name}>{pokemon.name}</li>
              })
            }
        </ul>
        <button
          disabled={loading}
          onClick={() => dispatch(getPokemons(page))}
        >
          Next
        </button>
    </>
  )
}
