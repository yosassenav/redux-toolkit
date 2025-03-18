import { pokemonApi } from "../../api/pokemonApi";
import { startLoadingPokemons } from "./pokemonSlice"
import { setPokemons } from "./index"


export const getPokemons = (page = 0) => {
    /**
     * A thunk is an asyncronous action that triggers
     * other actions when an async request is resolved
     */
    return async(dispatch, getState) => {
        /**calling the reducers that are declared in
         * the pokemonSlice.js file
         */
        dispatch(startLoadingPokemons());

        /*const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10000&offset=${page * 10}`);
        const data = await resp.json();*/

        const {data} = await pokemonApi.get(`/pokemon?limit=100&offset=${page * 10}`);

        dispatch(setPokemons({pokemons: data.results, page: page + 1}))
    }
}