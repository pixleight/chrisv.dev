import { Mutations } from './types'

export default {
  [Mutations.SET_DARKMODE]: (state, value) => {
    state.darkMode = value
  },
}
