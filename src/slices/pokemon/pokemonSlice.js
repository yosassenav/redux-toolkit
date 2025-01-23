import { createSlice } from '@reduxjs/toolkit';

export const pokemonSlice = createSlice({
  //nombre del slice con el que se vincula al store
  name: 'pokemon',
  //declaracion del estado inicial de las variables
  initialState: {
    page: 0,
    pokemon: [],
    loading: false,
  },
     //funciones que modifican el estado
  reducers: {
    startLoadingPokemons: (state) => {
      state.loading = true;
    },
    setPokemons: (state, actions) => {
      console.log(actions)
    }
  },
});

export const { startLoadingPokemons, setPokemons } = pokemonSlice.actions;
