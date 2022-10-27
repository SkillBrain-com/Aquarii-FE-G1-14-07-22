// Declara o clasa prin care sa reprezinți obiectul numit Mașina. O mașină are următoarele proprietăți: marca, model, culoare, kilometraj

// Pe lângă constructor, definește o metodă de tip getter numita getProps care va returna proprietățile mașinii sub forma
// Masina[marca=VOLVO, model=XC-60, culoare=Negru, kilometraj=234 000]

class Masina {
    constructor(marca, model, culoare, kilometraj) {
        this.marca = marca;
        this.model = model;
        this.culoare = culoare;
        this.kilometraj = kilometraj;
    }

    getProps() {
        return [`marca=${this.marca}, model=${this.model}, culoare=${this.culoare}, kilometraj=${this.kilometraj}`]
    }
}

const masina_1 = new Masina('Dacia', 'Duster', 'negru', 130000);

console.log(masina_1.getProps());


// La final, definește separat o funcție numită main, in care se vor crea 3 instanțe ale clasei mașina folosind operatorul new.Fiecare instanță 
// va fi memorata Într - o variabilă separată și va avea proprietăți diferite.Afișează proprietățile mașinilor instanțiate folosind getter - ul proprietati.

const main = () => {
    const masina_2 = new Masina('Opel', 'Astra', 'verde', 30000);
    const masina_3 = new Masina('Suzuki', 'Vitara', 'rosu', 650000);
    const masina_4 = new Masina('Mazda', 'Moere', 'gri', 20000);

    console.log(masina_2.getProps(),
        masina_3.getProps(),
        masina_4.getProps())
}

console.log(main());

// 2. Definește încă o clasa numita MasinaDeCurse. Această clasă va moșteni clasa Masina definita la exercițiul 1, folosind cuvantul cheie extends
// si va avea un constructor in care se va apela super() (adica superconstructorul).
// MasinaDeCurse va avea o metoda suplimentara numita participaLaCampionat, metoda ce va primi un parametru numit pozitiaInCampionat (un numar). 
// Metoda va afisa “Am castigat locul ” urmat de valoarea parametrului pozitiaInCampionat. Metoda va verifica daca pozitiaInCampionat este un numar 
// mai mare ca 0, iar in cazul in care numarul este mai mic sau egal cu 0, se va afisa mesajul “Nu am castigat niciun premiu”.

class MasinaDeCurse extends Masina {
    constructor(marca, model, culoare, kilometraj) {
        super(marca, model, culoare, kilometraj)
    }

    participaLaCampionat(locul) {
        if (locul > 0) {
            console.log(`Am castigat locul ${locul}`);
        } else {
            console.log(`Nu am castigat niciun premiu`);
        }
    }
}

const cursa = () => {
    const m1 = new MasinaDeCurse("Toyota", "Turbo", "Rosu", 100000);

    m1.participaLaCampionat(2)
    m1.participaLaCampionat(0)
}

cursa();