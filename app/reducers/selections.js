export const selections = (state, action) => {
  switch (action.type) {
    case 'SET_GENERATION':
      return {
        ...state,
        generation = action.generation
      }
    case 'SET_POKEMON_ID':
      return {
        ...state,
        pokemon_id = action.pokemon_id
      }
    default:
      return state
  }
}