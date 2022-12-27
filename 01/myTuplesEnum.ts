// const user: (string | number)[] = ['hs','asd',2]

//chuyen sang tuples
let tUser: [string, number, boolean]
//phai theo order data (thu tu)
tUser = ['asd', 22, true]

type User = [string, number]

const newUser: User = ['example@gmail.com', 21]

newUser[0] = 'something'
// newUser.push(true) khong duoc!! 


{}