import { getRandomElementFromArray as generateEmployee, isObject } from "./utils.js";
import { names, departments, states, streets, cities, zipCodes, dates } from "./data/index.js";
/**
 * Generate a list of employees
 *
 * @param {number} [amount=1] - amount of employees to generate
 * @param keyNames - rename a key from {@link Employee} object
 * @example
 * {
 *  firstName: "firstname",
 *  city: "RANDOM_CITY"
 * }
 * // should return
 * {
 *   firstname: string
 *   lastName: string,
 *   startDate: string,
 *   department: string,
 *   birthDate: string,
 *   state: string,
 *   street: string,
 *   RANDOM_CITY: string,
 *   zipCode: number
 * }
 */
function generateEmployees({ amount = 1, keyNames = {}, map }) {
    if (checkArgs({ amount, keyNames, map }) === false) {
        return null;
    }
    const employees = [];
    let count = 0;
    while (count++ < amount) {
        const [birthDate, startDate] = generateEmployee(dates).split("#");
        employees.push({
            [keyNames.firstName || "firstName"]: generateEmployee(names),
            [keyNames.lastName || "lastName"]: generateEmployee(names),
            [keyNames.startDate || "startDate"]: startDate,
            [keyNames.department || "department"]: generateEmployee(departments),
            [keyNames.birthDate || "birthDate"]: birthDate,
            [keyNames.state || "state"]: generateEmployee(states),
            [keyNames.street || "street"]: generateEmployee(streets),
            [keyNames.city || "city"]: generateEmployee(cities),
            [keyNames.zipCode || "zipCode"]: generateEmployee(zipCodes)
        });
    }
    return map !== undefined
        ? employees.map(map)
        : employees;
}
function checkArgs({ amount, keyNames, map }) {
    try {
        if (typeof amount !== "number") {
            throw new Error("amount argument should be of type number");
        }
        if (amount <= 0) {
            throw new Error("amount argument should be of type number");
        }
        if (!isObject(keyNames)) {
            throw new Error("keyNames must be an object");
        }
        const defaultKeys = [
            "firstName",
            "lastName",
            "department",
            "state",
            "street",
            "city",
            "zipCode"
        ];
        for (const key in keyNames) {
            if (defaultKeys.includes(key) === false) {
                throw new Error(`property ${key} doesnt exist on type "KeyNames"`);
            }
        }
        if (map !== undefined && typeof map !== "function") {
            throw new Error("expected map to be a function");
        }
    }
    catch (error) {
        console.error(error);
        return false;
    }
}
export default generateEmployees;
