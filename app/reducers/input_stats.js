let default_state = {
  previous_levels_submitted: [],
  level: null,
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
        level: action.level
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
        level: action.level,
      }
    case 'RESET_STATS':
      return default_state
    case 'CONFIRM_VALID_INPUT':
      return {
        ...default_state,
        previous_levels_submitted: state.previous_levels_submitted.concat([action.level])
      }
    default:
      return state
  }
}
