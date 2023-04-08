import { getRandomElementFromArray } from "./utils.js";
import { names, departments } from "./data/index.js";
export function generate(amount = 1) {
    const employees = [];
    let count = 0;
    let firstName = "";
    let lastName = "";
    let department = "";
    while (count < amount) {
        firstName = getRandomElementFromArray(names, firstName);
        lastName = getRandomElementFromArray(names, lastName);
        department = getRandomElementFromArray(departments, department);
        employees.push({
            firstName,
            lastName
        });
        count++;
    }
}
