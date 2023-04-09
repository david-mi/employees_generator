/**
 * @param array array of strings or numbers
 * @returns random element from an array.
 */

export function getRandomElementFromArray<T extends string | number>(array: T[]): T {
  return array[getRandomArrayIndex(array)]
}

/**
 * @returns a random index from an array
 */

function getRandomArrayIndex(array: any[]): number {
  return Math.floor(Math.random() * array.length)
}

/**
 * Check if the given parameter is an Object
 * 
 * @param obj element to check
 */

export function isObject(arg: any): boolean {
  return typeof arg !== "number" && arg.constructor.name === "Object"
}

/**
 * @param min min number
 * @param max max number
 * @returns number between {@link min} and {@link max}
 */

export function generateRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

/**
 * Converts a number to a string and make it at lease 2 digits length
 * adding zeros if needed
 */

export function padStart(value: number): string {
  return String(value).padStart(2, "0")
}