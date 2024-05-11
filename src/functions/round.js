export function round(n, dec = 2) {
  const p = Math.pow(10, dec);
  return Math.round(n * p) / p;
}
