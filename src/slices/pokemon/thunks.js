import { startLoadingPokemons } from "./pokemonSlice"


export const getPokemons = (page = 0) => {
    /**
     * This thunk returns an async function with two
     * arguments which are functions too
     */
    return async(dispatch, getState) => {
        dispatch(startLoadingPokemons());

        // dispatch(setPokemons())
    }
}