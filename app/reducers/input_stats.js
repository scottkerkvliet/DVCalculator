let default_state = {
  previous_levels_submitted: [],
  attack: null,
  defense: null,
  special: null,
  special_attack: null,
  special_defense: null,
  speed: null,
  hp: null
}

export const input_stats = (state = default_state, action) => {
  switch(action.type) {
    case 'SET_INPUT_STATS_GEN_1':
      return {
        ...state,
        hp: action.hp,
        attack: action.attack,
        defense: action.defense,
        speed: action.speed,
        special: action.special,

        previous_levels_submitted: state.previous_levels_submitted.push(level)
      }
    case 'SET_INPUT_STATS_GEN_2':
      return {
        ...state,
        hp: action.hp,
        attack: action.attack,
        defense: action.defense,
        speed: action.speed,
        special_attack: action.special_attack,
        special_defense: action.special_defense,

        previous_levels_submitted: state.previous_levels_submitted.push(level)
      }
    case 'RESET_STATS':
      return {
        hp: null,
        attack: null,
        defense: null,
        speed: null,
        special: null,
        special_attack: null,
        special_defense: null,
        previous_levels_submitted: []
      }
    default:
      return state
  }
}
