

/**
 * Exercitiul 1.
 * Declara o clasa prin care sa reprezinți obiectul numit Mașina. O mașină are următoarele proprietăți:
 */

class Masina {
   constructor(marca, model, culoare, kilometraj) {
      this.marca = marca
      this.model = model
      this.culoare = culoare
      this.kilometraj = kilometraj

   }

   getProps() {
      return `Masina[Marca=${this.marca}, Model=${this.model}, Culoare=${this.culoare}, Kilometraj=${this.kilometraj}]`
   }
}

const main = () => {
   const newCar1 = new Masina("Volvo", "XC-60", "Negru", 234000)
   const newCar2 = new Masina("Mazda", "CX-5", "Verde", 111000)
   const newCar3 = new Masina("Dacia", "BIGGSTER", "Albastru", 20000)

   console.log(
      newCar1.getProps(),
      "\n\n",
      newCar2.getProps(),
      "\n\n",
      newCar3.getProps(),
      "\n\n"
   );
}

main()

/**
 * Exercitiul 2.
 * 2. Definește încă o clasa numita MasinaDeCurse. Această clasă va moșteni clasa Masina definita la exercițiul 1, 
 * folosind cuvantul cheie extends si va avea un constructor in care se va apela super() (adica superconstructorul).
 */

class MasinaDeCurse extends Masina {
   constructor(marca, model, culoare, kilometraj) {
      super(marca, model, culoare, kilometraj);
   }


   ParticipaLaCampionat(pozitiaInCampionat) {
      if(pozitiaInCampionat <= 0) {
         console.log("Nu am castigat nici-un premiu");
      } else {
         console.log(`Am castigat locul ${pozitiaInCampionat}`)
   }
}
}

const cursa = () => {
   const m1 = new MasinaDeCurse("Toyota", "Turbo", "Rosu", 100000);


m1.ParticipaLaCampionat(2);
m1.ParticipaLaCampionat(-1);
}

cursa();

 







