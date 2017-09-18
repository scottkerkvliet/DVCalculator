let default_state = {
  attackRange: null,
  defenseRange: null,
  specialRange: null,
  speedRange: null,
  hpRange: null
}

export const dv_ranges = (state = default_state, action) => {
  switch(action.type) {
    case 'UPDATE_DV_RANGES':
      for (var key in state) {
        if (action[key] === undefined || action[key] === null) {
          return state
        }
      } 
    
      for (var key in state) {
        if (state[key] === null) {
          return {
            attackRange: action.attackRange,
            defenseRange: action.defenseRange,
            specialRange: action.specialRange,
            speedRange: action.speedRange,
            hpRange: action.hpRange
          }
        }
      }

      var newState = {}
      for (var key in state) {
        newState[key] = []
        newState[key][0] = Math.max(state[key][0], action[key][0])
        newState[key][1] = Math.min(state[key][1], action[key][1])
        if (newState[key][0] > newState[key][1]) {
          throw 'DVs do not match previously submitted stats. Problem stat: ' + key
        }
      }
      return newState
    case 'RESET_STATS':
      // may need to do something different in the future
      return default_state
    default:
      return state
  }
}
