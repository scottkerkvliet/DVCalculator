import generation1 from '../common/generation1'
import generation2 from '../common/generation2'

let default_state = {
  1: generation1,
  2: generation2
}

export const pokemon = (state = default_state, action) => {
  return state
}
