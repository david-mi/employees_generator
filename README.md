# Employees Generator v1.0.9

## Description

A simple random employees generator

## Installation
```bash
npm i employees-generator
```

## Usage
```js
import generateEmployees from "employees-generator";

const employees = generateEmployees();

/* if no options are passed, generate an array with a single Employee*/

[
  {
    firstName: 'Yingying',
    lastName: 'Bibi',
    startDate: '2020-12-16',
    department: 'Marketing',
    birthDate: '1992-05-05',
    state: 'PR',
    street: 'Western Ave',
    city: 'Baton Rouge',
    zipCode: 23321
  }
]
```

### Options

```ts
{
  /* Number of employees to generate */
  amount?: number
  /* Rename some defaults employee properties names */
  keyNames?: {
  firstName?: string
  lastName?: string,
  startDate?: string,
  department?: string,
  birthDate?: string,
  state?: string,
  street?: string,
  city?: string,
  zipCode?: string
  }
  /* Optional map callback for employees array */
  map?: (employee: Employee) => any
}
```

### Example

```js
const employees = generateEmployees({
  amount: 2,
  keyNames: {
    firstName: "USERNAME",
    state: "USERSTATE",
    zipCode: "zip"
  },
  map: (employee) => {
    const randomNumber = Math.round(Math.random());
    return { ...employee, randomNumber };
  }
});

/* RESULT */

[
  {
    USERNAME: 'Lihong',
    lastName: 'Therese',
    startDate: '2002-11-30',
    department: 'Sales',
    birthDate: '1961-07-01',
    USERSTATE: 'OR',
    street: 'Country Club Dr',
    city: 'Irvine',
    zip: 94066,
    randomNumber: 0
  },
  {
    USERNAME: 'Qing',
    lastName: 'Theresa',
    startDate: '2007-11-26',
    department: 'Sales',
    birthDate: '1982-01-16',
    USERSTATE: 'HI',
    street: 'Tremont St',
    city: 'Tulsa',
    zip: 44256,
    randomNumber: 1
  }
]
```