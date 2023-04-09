/**
 * @param array array of strings or numbers
 * @returns random element from an array.
 */
export declare function getRandomElementFromArray<T extends string | number>(array: T[]): T;
/**
 * Check if the given parameter is an Object
 *
 * @param obj element to check
 */
export declare function isObject(arg: any): boolean;
/**
 * @param min min number
 * @param max max number
 * @returns number between {@link min} and {@link max}
 */
export declare function generateRandomNumber(min: number, max: number): number;
/**
 * Converts a number to a string and make it at lease 2 digits length
 * adding zeros if needed
 */
export declare function padStart(value: number): string;
