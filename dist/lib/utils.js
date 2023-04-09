/**
 * @param array array of strings or numbers
 * @returns random element from an array.
 * - If element is the same as the previous one, generate a new index
 */
export function getRandomElementFromArray(array, previousElement) {
    let randomElement = array[getRandomArrayIndex(array)];
    while (randomElement === previousElement) {
        randomElement = getRandomElementFromArray(array, previousElement);
    }
    return randomElement;
}
/**
 * @returns a random index from an array
 */
function getRandomArrayIndex(array) {
    return Math.floor(Math.random() * array.length);
}
/**
 * Check if the given parameter is an Object
 *
 * @param obj element to check
 */
export function isObject(arg) {
    return typeof arg !== "number" && arg.constructor.name === "Object";
}
/**
 * @param min min number
 * @param max max number
 * @returns number between {@link min} and {@link max}
 */
export function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
/**
 * Converts a number to a string and make it at lease 2 digits length
 * adding zeros if needed
 */
export function padStart(value) {
    return String(value).padStart(2, "0");
}
