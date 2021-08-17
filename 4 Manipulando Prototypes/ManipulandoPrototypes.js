/**/
const objA = {chaveA: "A"}
const objB = {chaveB: "B"}
const objC = {chaveC: "C"}
const objD = new Object();
objD.chaveD = "D";

Object.setPrototypeOf(objC, objB)
Object.setPrototypeOf(objB, objA)
Object.setPrototypeOf(objD, objC)

console.log(objD.chaveA); 
