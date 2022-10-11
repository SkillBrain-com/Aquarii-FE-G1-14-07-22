/**
* Ai lucrat foarte bine
*/
/**
*1. Returnează un boolean dacă un număr este divizibil cu 10

Veți crea o funcție care vă va returna un boolean „adevărat” sau „fals” ca rezultat.
*/
const isDivisibleBy10 = (number) => number % 10 === 0;

/**
* Problema 2
* Ai scris bine functia, dar tine minte sa folosesti nume de parametrii sugestivi, n, z, y, x nu e prea sugestiv. (Stiu ca in exercitiu iti spune cu x,y,z si n)
*/

/**
* Problema 3
* Ai facut bine! Si chiar daca nu am facut inca switch, cred ca te-ai descurca sa cauti si sa implementezi cu switch. Da-i o incercare! Bafta
*/

/** 2. Scrieți o funcție numită tellFortune care:

    primește 4 argumente: numărul de copii (N), numele partenerului (Z), locația geografică (Y), locul de muncă (X).
    afișează pe ecran viitorul dvs. în felul următor: "Vei fi un X în Y, căsătorit cu Z și vei avea N copii."
*/

// Am folosit ES5

function test(num) {
  if (num % 10 === 0) {
    return true
  } else {
    return false
  }
}

console.log(test(20))

// Acum voi folosi ES6

const tellFortune = (N, Z, Y, X) => {
  console.log(`Vei fi un ${X} în ${Y} , căsătorit cu ${Z} și vei avea ${N} copii.`)
};

console.log(tellFortune("2", "Emanuel", "Italia", "Programator"));


/** 3. Folosind instrucțiunea JavaScript switch se va obține ziua săptămânii

Veți crea o funcție care va returna un șir de caractere (string) care va reprezenta numele unei zile a săptămânii în raport cu numărul acesteia pe parcursul unei săptămâni.

Exemplu 1:

Output: “Luni”
/* Am folosit if / else pentru ca nu am ajuns inca la lectiile cu switch */

function dayWeek(val) {
  let result = "";
  if (val === 1) {
    result = "Luni";
  } else if (val === 2) {
    result = "Marti";
  } else if (val === 3) {
    result = "Miercuri";
  } else if (val === 4) {
    result = "Joi";
  } else if (val === 5) {
    result = "Vineri";
  } else if (val === 6) {
    result = "Sambata";
  } else if (val === 7) {
    result = "Duminica";
  } else {
    result = "nu este zi din saptamana"
  }
  return result;
}

console.log(dayWeek(1));

// Am facut cu switch acum

function caseInSwitch(val) {
  switch (val) {
    case 1:
      return "Luni";
    case 2:
      return "Marti";
    case 3:
      return "Miercuri";
    case 4:
      return "Joi";
    case 5:
      return "Vineri";
    case 6:
      return "Sambata";
    case 7:
      return "Duminica";
  }
}

caseInSwitch(1);

