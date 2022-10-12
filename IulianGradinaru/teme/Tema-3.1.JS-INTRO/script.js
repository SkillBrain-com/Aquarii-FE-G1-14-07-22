


// Execitiu 1  Returnează un boolean dacă un număr este divizibil cu 10

const divibleBy10 = (number) => number % 10 === 0

const divizion = divibleBy10(100);

console.log("Impartirea", divizion);


// Exercitiu 2  Scrieți o funcție numită tellFortune care:

// in ordinea scrieri parametrilor in fuctie,, asa iti va aparea cand pui console.log



const tellFortune = (numarCopii, profesie, numelePartenerului, locatie)  => {

return `Vei fi un ${profesie}, in ${locatie}, casatorit cu ${numelePartenerului}, si vei avea ${numarCopii} copil`;
};

const rezultat = tellFortune(1, "Front Developer", "Oana", "Strasbourg", );

console.log(rezultat);



// Exercitiu 3 fictia IF


const weekDayByNumber = (number) =>
{
    if (number === 1)  {
    return "Monday";
}  else if (number === 2)  {
    return "Tuesday";
}  else if (number === 3)  {
    return "Wednesday";
}  else if (number === 4)  {
    return "Thursday";
}  else if (number === 5)  {
    return "Friday";
}  else if (number === 6)  {
    return "Saturday";
}  else if (number === 7)  {
    return "Sunday";
} else {
    return "Invalid Number"
}
}

console.log("Day Of Week:", weekDayByNumber(1))

// Bonus: functia Switch

const weekDayByNumber2 = (number) =>{
    switch (number){
        case 1 :
            return "Monday"
        case 2 :
            return "Tuesday"
        case 3 :
            return "Wednesday"
        case 4 :
            return "Thursday"
        case 5 :
            return "Friday"
        case 6 :
            return "Saturday"
        case 7 :
            return "Sunday"
        default:
            return "Invalid Number"    
    }
}

console.log("Day By Week2:", weekDayByNumber2(6) )

