import { $, says }    from '@spare/logger'
import { humanScale } from '../src/humanScale.js'

const candidates = {
  zero: 0,
  small: 256,
  total: 33657606144,
  free: 8478560256,
  used: 25179045888,
}

for (let [ key, num ] of Object.entries(candidates)) {
  says[key]($.input(num).output(humanScale(num)))
}