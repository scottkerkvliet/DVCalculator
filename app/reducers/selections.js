let default_state = {
  pokemon_id: null,
  generation: null
}

export const selections = (state = default_state, action) => {
  switch (action.type) {
    case 'SET_GENERATION':
      return {
        ...state,
        generation: action.generation
      }
    case 'SET_POKEMON_ID':
      return {
        ...state,
        pokemon_id: action.pokemon_id
      }
    default:
      return state
  }
}
