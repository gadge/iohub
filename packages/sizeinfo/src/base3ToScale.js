export function base3ToScale(base3, dec) {
  if (base3 === 0) return 'B'                //
  if (base3 === 1) return dec ? 'K' : 'KB' // Kilo
  if (base3 === 2) return dec ? 'M' : 'MB' // Mega
  if (base3 === 3) return dec ? 'G' : 'GB' // Giga
  if (base3 === 4) return dec ? 'T' : 'TB' // Tera
  if (base3 === 5) return dec ? 'P' : 'PB' // Peta
  if (base3 === 6) return dec ? 'E' : 'EB' // Exa
  if (base3 === 7) return dec ? 'Z' : 'ZB' // Zetta
  if (base3 === 8) return dec ? 'Y' : 'YB' // Yotta
}