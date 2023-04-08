import { getRandomElementFromArray } from "./utils.js";
import { names, departments, states } from "./data/index.js";

interface Employee {
  [key: string]: string
}

function generateEmployees(amount: number = 1): Employee[] {
  const employees: Employee[] = []
  let count = 0;
  let firstName = ""
  let lastName = ""
  let department = ""
  let state = ""

  while (count < amount) {
    firstName = getRandomElementFromArray(names, firstName)
    lastName = getRandomElementFromArray(names, lastName)
    department = getRandomElementFromArray(departments, department)
    state = getRandomElementFromArray(states, state)

    employees.push({
      firstName,
      lastName,
      department,
      state
    })

    count++
  }

  return employees
}

export default generateEmployees