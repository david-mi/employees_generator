import { getRandomElementFromArray as generateEmployee, isObject } from "./utils.js";
import { names, departments, states, streets, cities, zipCodes, dates } from "./data/index.js";

interface Employee {
  firstName?: string
  lastName?: string,
  startDate?: string,
  department?: string,
  birthDate?: string,
  state?: string,
  street?: string,
  city?: string,
  zipCode?: number
}

interface Options {
  amount: number
  keyNames?: Employee,
  map?: (employee: Employee) => any
}

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


function generateEmployees<T>({ amount = 1, keyNames = {}, map }: Options): T[] {
  checkArgs({ amount, keyNames, map })

  const employees: Employee[] = []
  let count = 0;

  while (count++ < amount) {
    const [birthDate, startDate] = generateEmployee(dates).split("#")

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
    })
  }

  return map !== undefined
    ? employees.map(map)
    : employees
}

function checkArgs({ amount, keyNames, map }: Options) {
  if (typeof amount !== "number") {
    throw new Error("amount argument should be of type number")
  }

  if (amount <= 0) {
    throw new Error("amount argument should be of type number")
  }

  if (!isObject(keyNames)) {
    throw new Error("keyNames must be an object")
  }

  const defaultKeys = [
    "firstName",
    "lastName",
    "startDate",
    "department",
    "birthDate",
    "state",
    "street",
    "city",
    "zipCode"
  ]

  for (const key in keyNames) {
    if (defaultKeys.includes(key) === false) {
      throw new Error(`property ${key} doesnt exist on type "KeyNames"`)
    }
  }

  if (map !== undefined && typeof map !== "function") {
    throw new Error("expected map to be a function")
  }
}

export default generateEmployees