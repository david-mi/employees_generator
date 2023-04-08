import { getRandomElementFromArray } from "./utils.js";
import { names } from "./data/index.js";

interface Employee {
  [key: string]: string
}

export function generate(amount: number = 1) {
  const employees: Employee[] = []
  let count = 0;
  let firstName = ""
  let lastName = ""

  while (count < amount) {
    firstName = getRandomElementFromArray(names, firstName)
    lastName = getRandomElementFromArray(names, lastName)
    employees.push({
      firstName,
      lastName
    })
    count++
  }
}