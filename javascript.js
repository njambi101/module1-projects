function adds (i, l) {
    return i + l
}

function modulos (v, u) {
    return v % u
}

export {adds, modulos}











/*const prep = [];
function getListOfWagons (a) {
    prep.push(a)
    return prep
}
    
console.log(getListOfWagons(1, 2, 3, 4, 5))*/
//getListOfWagons(1, 7, 12, 3, 14, 8, 5);











/*const n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const sum = n.map(num => num +" +")
console.log(sum)*/ 
/*const sum =(...n) => {
    return n.reduce((total, num) => total + num , 0);
}*/ 

/*let sum = (o) => { 
    return o.reduce((total, value) => total + value, 0)
    
}
*/ 

//let sum = n.reduce((total, value, index, array) => total + value, 0)
//console.log(sum())



/*function sum (a, b, c) {
    return a + b + c
}*/
//let num1 = n[0]
//let rest = n.slice(1)
//const [num1, num2, ...others ] = n
//console.log(rest)
//const result = sum(...n)
//console.log(result)
//const copy = [...n, 7, 8, 9];
//console.log(copy)







/*const student = {
    "id": "STU10243",
    "first_name": "Alex",
    "last_name": "Rivera",
    "age": 20,
    "email": "alex.rivera@university.edu",
    "enrolled_courses": ["Computer Science I", "Calculus II", "Discrete Math"],
    "gpa": 3.85,
    "is_active": true
}

const rest = ({email, age}) => {
    return email;
}*/ 
//const {id, first_name, last_name, ...rest} = student
//console.log(rest(student))
/*const update = (y) => {
    delete y.email
    return student
}
console.log(update(student))

const addons = (a, b) => {
    a.school = b;
    return student
}
console.log(addons(student, "moringa"))*/ 
/*const retrieve = (i) => {
    return i.first_name
}
    */ 
//node javascript.js








//const arr = [1, 2, 3, 4];
//const newArr = [5, 6, arr[0], arr[1], arr[2]]
/*const b = [5, 6, ...arr];
console.log(b)

const student = {
    id: "STU10243",
    firstName: "Alex",
    lastName: "Rivera",
    age: 20
}
let newstud = {"email": "alex.rivera@university.edu", "enrolled_courses": ["Computer Science I", "Calculus II", "Discrete Math"], ...student}
console.log(newstud)
*/ 

/*const animal = {
    name : "lion",
    age : 30,
    year : 2002,
}

const moreDetails = {
    YOB : 2004,
    isFree : true,
    gender : "F"
}

let animalDetails = {...animal, ...moreDetails}
console.log(animalDetails)*/ 
//let copy = {...animal, ishappy: true}
//console.log(animal, copy)
//animal.who = "newdays"
//console.log(animal)
/*for (let a in animal) {
    //animal.name = "jane"
    console.log(`${a}: ${animal[a]}`)
}*/ 