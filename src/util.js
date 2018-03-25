if (process.env.NODE_ENV !== 'production') {
  console.log('looks like we are in dev mode')
}

export function square (x) {
  return x * x
}

export function cube (x) {
  console.log('schubibuuuu')
  return x * x * x
}
