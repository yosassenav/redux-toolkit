import { createSlice } from '@reduxjs/toolkit';

export const pokemonSlice = createSlice({
  //nombre del slice con el que se vincula al store
  name: 'name',
  //declaracion del estado inicial de las variables
  initialState: {
    page: 0,
    pokemon: [],
    loading: false,
  },
     //funciones que modifican el estado
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
    decrement: (state) => {
      state.counter -= 1;
    },
         //incremeta por una cantidad dada
    incrementByAmount: (state, action) => {
      state.counter += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = pokemonSlice.actions;
