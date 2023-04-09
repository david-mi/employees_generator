/**
 * Create employees birth year and start working date
 *
 * @param amount amount of data to generate
 * @param minAge min employee age
 * @param maxAge max employee age
 * @returns array of combined birth year and start working date as strings, separated by "#" caracter
 * @example ["1979-12-02#2013-11-10", "2003-12-01#2021-11-09"]
 */
export declare function generateDates(amount: number, minAge: number, maxAge: number): string[];
export declare const dates: string[];
