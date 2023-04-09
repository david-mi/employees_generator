interface Employee {
    firstName?: string;
    lastName?: string;
    startDate?: string;
    department?: string;
    birthDate?: string;
    state?: string;
    street?: string;
    city?: string;
    zipCode?: number;
}
interface Options {
    amount: number;
    keyNames?: Employee;
    map?: (employee: Employee) => any;
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
declare function generateEmployees({ amount, keyNames, map }: Options): Employee[] | null;
export default generateEmployees;
