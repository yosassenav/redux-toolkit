import { pokemonApi } from "../../api/pokemonApi";
import { startLoadingPokemons } from "./pokemonSlice"


export const getPokemons = (page = 0) => {
    /**
     * This thunk returns an async function with two
     * arguments which are functions too
     */
    return async(dispatch, getState) => {
        /**calling the reducers that are declared in
         * the pokemonSlice.js file
         */
        dispatch(startLoadingPokemons());

        /*const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10000&offset=${page * 10}`);
        const data = await resp.json();*/

        const {data} = await pokemonApi.get(`/pokemon?limit=10000&offset=${page * 10}`);
        console.log(data)

        dispatch(setPokemons({pokemons: data.results, page: page + 1}))
    }
}