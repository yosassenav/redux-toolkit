import { createSlice } from '@reduxjs/toolkit';

export const pokemonSlice = createSlice({
  //nombre del slice con el que se vincula al store
  name: 'pokemons',
  //declaracion del estado inicial de las variables
  initialState: {
    page: 0,
    pokemons: [],
    loading: false,
  },
     //funciones que modifican el estado
  reducers: {
    startLoadingPokemons: (state) => {
      state.loading = true;
    },
    setPokemons: (state, action) => {
      state.loading = false;
      state.page = action.payload.page;
      state.pokemons = action.payload.pokemons;
  },
  }
});

export const { startLoadingPokemons, setPokemons } = pokemonSlice.actions;
