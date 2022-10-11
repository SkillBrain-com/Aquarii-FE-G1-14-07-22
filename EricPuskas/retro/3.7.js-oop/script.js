/**
 * Declara o clasa prin care sa reprezinți obiectul numit Mașina. O mașină are următoarele proprietăți:

marca (ex: Volvo, Mazda, Dacia)
model (ex: XC-60, CX-5, BIGGSTER)
culoare (ex Negru, Verde, Albastru)
kilometraj (ex 234 000, 111 000, 20 000)
Pentru aceasta clasa definește un constructor care sa inițializeze proprietățile clasei folosind this.


Pe lângă constructor, definește o metodă de tip getter (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get) numita getProperties care va returna proprietățile mașinii sub forma

Masina[marca=VOLVO, model=XC-60, culoare=Negru, kilometraj=234 000]

La final, definește separat o funcție numită main, in care se vor crea 3 instanțe ale clasei mașina folosind operatorul new. Fiecare instanță va fi memorata Într-o variabilă separată și va avea proprietăți diferite. Afișează proprietățile mașinilor instanțiate folosind getter-ul getProps.

Pentru mașinile date in exemplu programul va afișa

Masina[marca=VOLVO, model=XC-60, culoare=Negru, kilometraj=234 000]

Masina[marca=Mazda, model=CX-5, culoare=Verde, kilometraj=111 000]

Masina[marca=Dacia, model=BIGGSTER, culoare=Albastru, kilometraj=20 000]
 */

// const masina1 = new Masina("", "", "")
class Masina {
  constructor(marca, model, culoare, kilometraj) {
    this.marca = marca;
    this.model = model;
    this.culoare = culoare;
    this.kilometraj = kilometraj;
  }

  getProps() {
    return `Masina[marca=${this.marca}, model=${this.model}, culoare=${this.culoare}, kilometraj=${this.kilometraj}]`;
  }
}

const main = () => {
  const newCar1 = new Masina("Volvo", "XC-60", "negru", 234000);
  const newCar2 = new Masina("Mazda", "CX-5", "verde", 144000);
  const newCar3 = new Masina("Dacia", "Duster", "rosu", 564000);

  console.log(
    newCar1.getProps(),
    "\n\n",
    newCar2.getProps(),
    "\n\n",
    newCar3.getProps()
  );
};

main();

/**
 *  2. Definește încă o clasa numita MasinaDeCurse. Această clasă va moșteni clasa Masina definita la exercițiul 1, folosind cuvantul cheie extends si va avea un constructor in care se va apela super() (adica superconstructorul).

   MasinaDeCurse va avea o metoda suplimentara numita participaLaCampionat, metoda ce va primi un parametru numit pozitiaInCampionat (un numar). Metoda va afisa “Am castigat locul ” urmat de valoarea parametrului pozitiaInCampionat. Metoda va verifica daca pozitiaInCampionat este un numar mai mare ca 0, iar in cazul in care numarul este mai mic sau egal cu 0, se va afisa mesajul “Nu am castigat niciun premiu”.

   const m1 = new MasinaDeCurse("Toyota", "Turbo", "Rosu", 100000);
m1.participaLaCampionat(30);
//Va afisa mesajul: Am castigat locul 30

m1.participaLaCampionat(-1);
//Va afisa mesajul: Nu am castigat niciun premiu

La final defineste o functie in care sa instantiezi doua masini de curse, prima va paricipa la campionat si va castiga locul 2, iar a doua nu va participa la campionat(folosind metoda definita). De asemenea afiseaza proprietatiile masinilor ca si la exercitiul
 */

class MasinaDeCurse extends Masina {
  constructor(marca, model, culoare, kilometraj) {
    super(marca, model, culoare, kilometraj);
  }

  participaLaCampionat(pozitiaInCampionat) {
    if (pozitiaInCampionat <= 0) {
      console.log("Nu am castigat nici un premiu");
    } else {
      console.log(`Am castigat locul ${pozitiaInCampionat}`);
    }
  }
}

const cursa = () => {
  const m1 = new MasinaDeCurse("Toyota", "Turbo", "Rosu", 100000);

  m1.participaLaCampionat(1);
  m1.participaLaCampionat(-1);
};

cursa();

// const m1 = new MasinaDeCurse("Toyota", "Turbo", "Rosu", 100000);

/**
 * @param firstName: string
 * @param lastName: string
 * @param age: number
 * @param married: boolean
 * @param friends: string[]
 */
class Person {
  friends = [];
  constructor(firstName, lastName, age, married, friends) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.married = married;
    this.friends = friends;
  }

  getHuman() {
    return `I am ${this.firstName} ${this.lastName}, I have ${this.age}, I am ${
      this.married ? "married" : "not married"
    }, I have ${this.friends.length} friends, which are ${this.friends.join(
      ","
    )}`;
  }
}

const vali = new Person("Vali", "Popescu", 28, true, ["Stefan", "Bogdan"]);

console.log(vali.getHuman());

class Programmer extends Person {
  constructor(
    firstName,
    lastName,
    age,
    married,
    friends,
    yearsOfExperience,
    field
  ) {
    super(firstName, lastName, age, married, friends);
    this.yearsOfExperience = yearsOfExperience;
    this.field = field;
  }

  getExperience() {
    return `I have ${this.yearsOfExperience} years of experience in ${this.field}`;
  }

  setExperience(years) {
    this.yearsOfExperience = years;
  }
}

const vali1 = new Programmer(
  "Vali",
  "Bocanel",
  18,
  false,
  ["stefan", "florin"],
  3,
  "frontEnd"
);

vali1.setExperience(4);
console.log(vali1.getExperience());

const myArray = new Array(1);
console.log(myArray);

/**
 * {
 *   "key": "value", number, boolean,
 *  }
 *
 * [0, 1, 2]
 *
 * {
 *  0: undefined,
 *  1: undefined,
 *  2: undefined,
 * ....
 *  n: undefined
 * }
 */
class NewArray {
  list = {};

  constructor(arrayLength) {
    // this.list = new Array(arrayLength);
    if (arrayLength) {
      for (let i = 0; i < arrayLength; i++) {
        this.list[i] = undefined;
      }
    }
  }

  push(value) {
    const keys = Object.keys(this.list).map((value) => parseFloat(value));

    if (keys.length < 1) {
      this.list[0] = value;
    } else {
      const maxKey = Math.max(...keys);
      console.log({ keys, maxKey });

      this.list[maxKey + 1] = value;
    }
  }

  map(fn) {
    let newList = [];
    for (let index in this.list) {
      const item = this.list[index];

      const result = fn(item, index, this.list);
      newList.push(result);
    }

    return newList;
  }

  getList() {
    return Object.entries(this.list).map((value) => {
      return value[1];
    });
  }
}

const myNewArray = new NewArray();

console.log(myNewArray.getList());

myNewArray.push(2);
myNewArray.push(3);
myNewArray.push(4);

console.log(myNewArray.getList());

const my2Array = myNewArray.map((value) => {
  console.log("VALUE:", value);
  return value.toString();
});

console.log(my2Array);
