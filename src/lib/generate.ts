import { getRandomElementFromArray as generateEmployee, isObject } from "./utils.js";
import { names, departments, states, streets, cities, zipCodes } from "./data/index.js";

interface Employee {
  [key: string]: string | number
}

type KeyNames = {
  firstName?: string
  lastName?: string,
  department?: string,
  state?: string,
  street?: string,
  city?: string,
  zipCode?: string
}

interface Options {
  amount: number
  keyNames: KeyNames,
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
 *   department: string,
 *   state: string,
 *   street: string,
 *   RANDOM_CITY: string,
 *   zipCode: number
 * }
 */


function generateEmployees({ amount = 0, keyNames, map }: Options): Employee[] | null {
  if (checkArgs({ amount, keyNames, map }) === false) {
    return null
  }

  const employees: Employee[] = []
  let count = 0;
  let firstName, lastName, department, state, street, city, zipCode

  while (++count < amount) {
    employees.push({
      [keyNames.firstName || "firstName"]: generateEmployee(names, firstName),
      [keyNames.lastName || "lastName"]: generateEmployee(names, lastName),
      [keyNames.department || "department"]: generateEmployee(departments, department),
      [keyNames.state || "state"]: generateEmployee(states, state),
      [keyNames.street || "street"]: generateEmployee(streets, street),
      [keyNames.city || "city"]: generateEmployee(cities, city),
      [keyNames.zipCode || "zipCode"]: generateEmployee(zipCodes, zipCode)
    })
  }

  return map
    ? employees.map(map)
    : employees
}

function checkArgs({ amount, keyNames, map }: Options) {
  try {
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
      "department",
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

    if (typeof map !== "function") {
      throw new Error("expected map to be a function")
    }

  } catch (error) {
    console.error(error)
    return false
  }
}

export default generateEmployees