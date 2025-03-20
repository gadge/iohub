import { base3ToScale } from './base3ToScale.js'
import { trailZero }    from './trailZero.js'

export const humanScale = (num, dec) => {
  const B10 = dec ? 1000 : 1024
  let base3 = 0
  while (num > B10) { num /= B10, base3++ }
  return trailZero(num) + ' ' + base3ToScale(base3, dec)
}