/*
1. Declara o clasa prin care sa reprezinți obiectul numit Mașina. O mașină are următoarele proprietăți:

marca (ex: Volvo, Mazda, Dacia)
model (ex: XC-60, CX-5, BIGGSTER)
culoare (ex Negru, Verde, Albastru)
kilometraj (ex 234 000, 111 000, 20 000)

Declara o clasa prin care sa reprezinți obiectul numit Mașina. O mașină are următoarele proprietăți:

marca (ex: Volvo, Mazda, Dacia)
model (ex: XC-60, CX-5, BIGGSTER)
culoare (ex Negru, Verde, Albastru)
kilometraj (ex 234 000, 111 000, 20 000)
*/

class Masina{
    constructor(marca,model,culoare,kilometraj){
        this.marca=marca;
        this.model=model;
        this.culoare=culoare;
        this.kilometraj=kilometraj;
    }
    getProperties(){
        return `Masina[marca=${this.marca}, model=${this.model},culoare=${this.culoare},kilometraj=${this.kilometraj}]`;
    }
}

const masina1=new Masina("VOLVO","XC - 60","Negru",234000);
const masina2=new Masina("Mazda","CX - 5","Verde",111100);
const masina3=new Masina("Dacia","Solenza","Albastru",23000);

console.log(masina1.getProperties());
console.log(masina2.getProperties());
console.log(masina3.getProperties());


/*
2.Definește încă o clasa numita MasinaDeCurse. 
Această clasă va moșteni clasa Masina definita la exercițiul 1, folosind cuvantul cheie extends si va avea un constructor in care se va apela super() (adica superconstructorul). 

*/

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