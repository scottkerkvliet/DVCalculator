export const input_stats_gen_1 = (level, hp, speed, attack, defense, special) => {
  return {
    type: 'SET_INPUT_STATS_GEN_1',
    level: level,
    hp: hp,
    attack: attack,
    defense: defense,
    special: special,
    speed: speed
  }
}

export const input_stats_gen_2 = (level, hp, speed, attack, defense, special_attack, special_defense) => {
  return {
    type: 'SET_INPUT_STATS_GEN_2',
    level: level,
    hp: hp,
    attack: attack,
    defense: defense,
    special_attack: special_attack,
    special_defense: special_defense,
    speed: speed
  }
}

export const reset_stats = () => {
  return {
    type: 'RESET_STATS'
  }
}

export const input_generation = (generation) => {
  return {
    type: 'SET_GENERATION',
    generation: generation
  }
}

export const input_pokemon_id = (id) => {
  return {
    type: 'SET_POKEMON_ID',
    pokemon_id: id
  }
}