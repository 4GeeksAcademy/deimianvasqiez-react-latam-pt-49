// destructuring

const obj = {
    age: 10,
    nameOne: "Deimian",
    lastname: "Vásquez"
}




const { lastname, nameOne, age } = obj

console.log(`Hola ${nameOne} ${lastname} ${age}`)

console.log(obj)