//Pb.1

const printEvenNumbers =(maxNumber) => {
    let numbers=""
    for(let i=0;i<=maxNumber;i+=2){
        numbers+=" "+i
    }
    return numbers
}

console.log("////////////////Problema 1////////////////////")
const maxNumber1=15

console.log("Numerele pare pana la ",maxNumber1,"sunt:",printEvenNumbers(maxNumber1))

const maxNumber2=12

console.log("Numerele pare pana la ",maxNumber2,"sunt:",printEvenNumbers(maxNumber2))

//Pb.2

const sumOfElements =(array) => {
   
    let suma=0;
    for(let i=0;i<array.length;i++){
        suma+=array[i]
    }
    return suma
}


console.log("////////////////Problema 2////////////////////")
const array1=[1,2,3,4,5,6,7]
console.log("Suma elementelor matricei",array1,"este:",sumOfElements(array1))

const array2=[-2,3,-5,9,5,0,2,5,4.5,9.2,3]
console.log("Suma elementelor matricei",array2,"este:",sumOfElements(array2))

const array3=[1/2,3/4,6,-8,25,82,-11]
console.log("Suma elementelor matricei",array3,"este:",sumOfElements(array3))

//Pb.3

const reverseArray =(arrayInitial) => {
    let reversedArray=[]
    for(let i=0;i<arrayInitial.length;i++){
        reversedArray[i]=arrayInitial[arrayInitial.length-1 - i]
    }
    return reversedArray
}

console.log("////////////////Problema 3////////////////////")
const sir1=[2,5,"Petru",true,"epsilon",9,4.2,-23]
console.log("inversul sirului:",sir1,"este:",reverseArray(sir1))

const sir2=[false,8,"Adina",-3,true,12.3,-4.2,"Gamma"]
console.log("inversul sirului:",sir2,"este:",reverseArray(sir2))

//Pb.4

const isAVowel=(letter)=>{
    switch (letter) {
        case "a":
            return true
        case "e":
            return true
        case "i":
            return true
        case "o":
            return true
        case "u":
            return true
        case "A":
            return true
        case "E":
            return true
        case "I":
            return true
        case "O":
            return true
        case "U":
            return true
        default:
            return false
    }
}

const numberOfVowels = (proposition) =>{
    let numOfVoals=0;
    for(let i=0;i<proposition.length;i++){
        if(isAVowel(proposition[i])){
            numOfVoals+=1;
        }
    }
    return numOfVoals
}

console.log("////////////////Problema 4////////////////////")
const prop1="Ana are mere."
console.log("Sirul'",prop1,"' are",numberOfVowels(prop1),"vocale.")
const prop2="Cine se aseamana se aduna." 
console.log("Sirul'",prop2,"' are",numberOfVowels(prop2),"vocale.")
