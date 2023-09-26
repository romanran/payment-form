export function randomNumber(min: number, max: number) {
  return Math.random() * (max - min) + min
}

export function notEmpty<TValue>(value: TValue | null | undefined): value is TValue {
  return value !== null && value !== undefined
}
