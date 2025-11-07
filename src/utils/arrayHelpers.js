export function not(a, b, key = 'id') {
  const bSet = new Set(b.map(item => item[key]));
  return a.filter(item => !bSet.has(item[key]));
}

export function intersection(a, b) {
  const bSet = new Set(b.map(item => item.id));
  return a.filter(item => bSet.has(item.id));
}

export function union(a, b) {
  return [...a, ...not(b, a)];
}
