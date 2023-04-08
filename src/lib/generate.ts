import { getRandomElementFromArray as generateEmployee } from "./utils.js";
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
  zipCode?: number
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


function generateEmployees(amount: number = 1, keyNames: KeyNames = {}): Employee[] {
  const employees: Employee[] = []
  let count = 0;
  let firstName, lastName, department, state, street, city, zipCode

  while (count < amount) {
    employees.push({
      [keyNames.firstName || "firstName"]: generateEmployee(names, firstName),
      [keyNames.lastName || "lastName"]: generateEmployee(names, lastName),
      [keyNames.department || "department"]: generateEmployee(departments, department),
      [keyNames.state || "state"]: generateEmployee(states, state),
      [keyNames.street || "street"]: generateEmployee(streets, street),
      [keyNames.city || "city"]: generateEmployee(cities, city),
      [keyNames.zipCode || "zipCode"]: generateEmployee(zipCodes, zipCode)
    })

    count++
  }

  return employees
}

export default generateEmployees