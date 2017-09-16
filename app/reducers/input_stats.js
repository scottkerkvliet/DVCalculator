export const input_stats = (state, action) => {
    switch(action.type) {
        case 'SET_INPUT_STATS_GEN_1':
            return {
                ...state,
                hp: action.hp,
                attack: action.attack,
                defense: action.defense,
                speed: action.speed,
                special: action.special
            }
        case 'SET_INPUT_STATS_GEN_2':
            return {
                ...state,
                hp: action.hp,
                attack: action.attack,
                defense: action.defense,
                speed: action.speed,
                special_attack: action.special_attack,
                special_defense: action.special_defense
            }
        default:
            return state
    }
}