import { roundD2 } from '@aryth/math'

/**
 * @param {number} num
 * @returns {string}
 */
export function trailZero(num) {

  if (!num) return '0'
  const tx = '' + roundD2(num)
  let i = tx.indexOf('.')
  if (!~i) { return tx + '.00' }
  let df = tx.length - i
  if (df === 3) { return tx }
  if (df === 2) { return tx + '0' }
  if (df === 1) { return tx + '00' }
  return tx
}