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

// generic type : loại chung ( chuẩn loại, loài )
function insertAtBeginning(array: any[], value: any) {
    const newArray = [value, ...array]
    return newArray
}

const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1) // [-1, 1, 2, 3]
// nó sẽ không nhận dạng được đâu là string hay number hay array
updatedArray[0].split('')

function insertAtBeginning2<T>(array: T[], value: T) {
    const newArray = [value, ...array]
    return newArray
}

const demoArray2 = [1, 2, 3];
const updatedArray2 = insertAtBeginning2(demoArray, -1) // [-1, 1, 2, 3]

const stringArray = insertAtBeginning2(['a', 'b', 'c'], 'd')
// updatedArray2[0].split('')