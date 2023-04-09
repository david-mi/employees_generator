import { padStart, generateRandomNumber } from "../utils.js";
/**
 * Create employees birth year and start working date
 *
 * @param amount amount of data to generate
 * @param minAge min employee age
 * @param maxAge max employee age
 * @returns array of combined birth year and start working date as strings, separated by "#" caracter
 * @example ["1979-12-02#2013-11-10", "2003-12-01#2021-11-09"]
 */
export function generateDates(amount, minAge, maxAge) {
    const currentYear = new Date().getFullYear();
    const maxYearTime = new Date().setFullYear(currentYear - minAge);
    const minYearTime = new Date().setFullYear(currentYear - maxAge);
    return Array.from({ length: amount }, () => {
        const randomBirthDate = new Date(generateRandomNumber(minYearTime, maxYearTime));
        const randomBirthYear = randomBirthDate.getFullYear();
        const randomBirthMonth = padStart(randomBirthDate.getMonth() + 1);
        const randomBirthDay = padStart(randomBirthDate.getDate());
        const minStartYear = new Date().setFullYear(randomBirthYear + minAge);
        const randomStartDate = new Date(generateRandomNumber(minStartYear, Date.now()));
        const randomStartYear = randomStartDate.getFullYear();
        const randomStartMonth = padStart(randomStartDate.getMonth() + 1);
        const randomStartDay = padStart(randomStartDate.getDate());
        return `${randomBirthYear}-${randomBirthMonth}-${randomBirthDay}#${randomStartYear}-${randomStartMonth}-${randomStartDay}`;
    });
}
export const dates = generateDates(1000, 18, 65);
