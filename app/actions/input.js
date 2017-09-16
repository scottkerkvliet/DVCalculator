export const input_stats_gen_1_action = (hp, speed, attack, defense, special) => {
    return {
        type: 'SET_INPUT_STATS_GEN_1',
        hp: hp,
        attack: attack,
        defense: defense,
        special: special,
        speed: speed
    }
}

export const input_stats_gen_2_action = (hp, speed, attack, defense, special_attack, special_defense) => {
    return {
        type: 'SET_INPUT_STATS_GEN_2',
        hp: hp,
        attack: attack,
        defense: defense,
        special_attack: special_attack,
        special_defense: special_defense,
        speed: speed
    }
}

