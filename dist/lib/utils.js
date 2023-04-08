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
