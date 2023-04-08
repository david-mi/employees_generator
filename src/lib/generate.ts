import { getRandomElementFromArray } from "./utils.js";
import { names, departments, states, streets, cities, zipCodes } from "./data/index.js";

interface Employee {
  [key: string]: string | number
}

function generateEmployees(amount: number = 1): Employee[] {
  const employees: Employee[] = []
  let count = 0;
  let firstName = ""
  let lastName = ""
  let department = ""
  let state = ""
  let street = ""
  let city = ""
  let zipCode = 0

  while (count < amount) {
    firstName = getRandomElementFromArray(names, firstName)
    lastName = getRandomElementFromArray(names, lastName)
    department = getRandomElementFromArray(departments, department)
    state = getRandomElementFromArray(states, state)
    street = getRandomElementFromArray(streets, street)
    city = getRandomElementFromArray(cities, city)
    zipCode = getRandomElementFromArray(zipCodes, zipCode)

    employees.push({
      firstName,
      lastName,
      department,
      street,
      city,
      state,
      zipCode
    })

    count++
  }

  return employees
}

export default generateEmployees