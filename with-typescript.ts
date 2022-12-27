// union type can be add many type as possible
let course: string | number = 'React - The complete Guide'

course = 12341

// type Aliases :: loại bí danh

type Person = {
    name: string,
    age: number
}

const person: Person = {
    name: 'thao',
    age: 26
}

// function and type
function addTwoNumber(a: number, b: number) {
    return a + b;
}

function printOutput(value: any) {
    console.log(value);
}