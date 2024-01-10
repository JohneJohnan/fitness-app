export function isValidNumber(x) {
  return typeof x === 'number' && !isNaN(x) && x !== 0;
}

export function isValidString(x) {
  return typeof x === 'string' && x !== '';
}
