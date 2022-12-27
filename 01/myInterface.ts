// giong class

interface User {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId: string,
    // startTrail: () => string,
    startTrail(): string,
    getCoupon(couponname: string, value: number): number,
}

interface User {
    githubToken: string
}

interface Admin extends User {
    role: 'admin' | 'ta' | 'learner'
}

// const hitesh: User = {
//     dbId: 22,
//     email: 'example@gmail.com',
//     userId: 33,
//     googleId: '44',
//     startTrail: () => {
//         return 'train started';
//     },
//     getCoupon: (name: 'thao', value: 55) => {
//         return 123
//     },
//     githubToken: 'zxcasdq'
// }

const hitesh: Admin = {
    dbId: 22,
    email: 'example@gmail.com',
    userId: 33,
    googleId: '44',
    role: 'admin',
    startTrail: () => {
        return 'train started';
    },
    getCoupon: (name: 'thao', value: 55) => {
        return 123
    },
    githubToken: 'zxcasdq'
}


{}