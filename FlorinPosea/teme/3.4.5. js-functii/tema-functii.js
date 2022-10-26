
// 1. Scrieți o funcție care returnează pătratul unui număr

const findSquare = (num) => num**2;

console.log("\nProblema 1\n----------");
console.log(findSquare(6));
console.log(findSquare(0));
console.log(findSquare(-12));


/*
2. Scrieți o funcție pentru a genera un număr aleatoriu mai mare sau egal cu o variabilă start și strict mai mic decât o variabilă end.
Aceste două variabile sunt capetele intervalului pentru numărul general: [start, end)
*/

const getRandom = (start, stop) => Math.floor((stop-start)*Math.random()) + start;

const randomResults = ((start, stop, iter) => {
    while (iter) {
        iter--;
        console.log(getRandom(start, stop));
    }
});

console.log("\nProblema 2\n----------");
randomResults(3,5,5);



// 3. Scrieți o funcție pentru a găsi numărul de apariții al unei litere într-un șir

const letterCount = (string, letter) => {
    let count=0;
    for (let i=0; i<string.length; i++) {string.toLowerCase()[i] === letter ? count++ : null}
    return count;
}

console.log("\nProblema 3\n----------");
console.log(letterCount("Îmi place programarea","a"));
console.log(letterCount("Vreau să lucrez în IT","r"));



// 4. Scrieți o funcție pentru a adăuga numere nelimitate

const addNumber = (...args) => {
    let sum = 0;
    for (const item of [...args]) {
        sum += item;
    }
    return sum;
}

console.log("\nProblema 4\n----------");
console.log(addNumber(1,2,3));
console.log(addNumber(1,2,3,4,5), "\n");
