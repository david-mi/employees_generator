/**
 * @param array array of strings or numbers
 * @returns random element from an array.
 * - If element is the same as the previous one, generate a new index
 */

export function getRandomElementFromArray<T extends string | number>(array: T[], previousElement?: T): T {
  let randomElement = array[getRandomArrayIndex(array)]

  while (randomElement === previousElement) {
    randomElement = getRandomElementFromArray(array, previousElement)
  }

  return randomElement
}

/**
 * @returns a random index from an array
 */

function getRandomArrayIndex(array: any[]): number {
  return Math.floor(Math.random() * array.length)
}