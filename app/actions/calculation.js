export const update_dv_ranges = (hpRange, attackRange, defenseRange, speedRange, specialRange)  => {
  return {
    type: 'UPDATE_DV_RANGES',
    hpRange: hpRange,
    attackRange: attackRange,
    defenseRange: defenseRange,
    speedRange: speedRange,
    specialRange: specialRange
  }
}

export const confirm_valid_input = (level) => {
  return {
    type: 'CONFIRM_VALID_INPUT',
    level: level
  }
}