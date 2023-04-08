import { getRandomElementFromArray } from "./utils.js";
import { names, departments } from "./data/index.js";

interface Employee {
  [key: string]: string
}

function generateEmployees(amount: number = 1): Employee[] {
  const employees: Employee[] = []
  let count = 0;
  let firstName = ""
  let lastName = ""
  let department = ""

  while (count < amount) {
    firstName = getRandomElementFromArray(names, firstName)
    lastName = getRandomElementFromArray(names, lastName)
    department = getRandomElementFromArray(departments, department)
    employees.push({
      firstName,
      lastName,
      department
    })
    count++
  }

  return employees
}

export default generateEmployees