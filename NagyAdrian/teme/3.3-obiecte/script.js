// Scrieți o funcție care creează un obiect pentru a păstra informații despre rețeta ta preferată

// Input: titlu = “Pizza”, portii = 3, ingrediente = [“sunca”, “cas”, “ketchup”]

// Output: { titlu: “Pizza”, portii: 3, ingrediente: [”sunca”, “cas”, “ketchup”] }

let reteta = { titlu: "", portii: "", ingredinte: [] }
function Scriere(o) {
  o.titlu = "pizza"
  o.portii = "3"
  o.ingrediente = ["sunca", "cas", "ketcup"]
}

Scriere(reteta)

console.log(reteta)



//Scrieți o funcție care returnează un obiect nou fără proprietățile furnizate

//Input: obiect = { a: 1, b: 2 }, proprietate = “b”

//Output: { a: 1 }

const obiect = { a: 1, b: 2 }
function StergerePropritetate(o) {
  delete obiect.b
}
StergerePropritetate(obiect)
console.log(obiect)

//Scrieți o funcție care:
//Iterează prin gama de cărți. Pentru fiecare carte se afișează titlul și autorul cărții astfel: “Hobbitul de J.R.R. Tolkien”.
//Utilizează o instrucțiune if / else ce modifică rezultatul, în funcție de faptul că ați citit-o sau nu. Dacă cartea a fost citită, se afișează cu ajutorul functiei console.log un mesaj de tipul “Ai citit deja “Hobbitul” de J.R.R. Tolkien”, iar dacă nu, se afișează un mesaj de tipul “Trebuie să citești “Hobbitul” de J.R.R. Tolkien”.

//Input: [ { titlu: "Carte 1", autor: "Autor 1", esteCitita: true }, { titlu: "Carte 2", autor: "Autor 2", esteCitita: false }, ];

//Output:
//"Carte 1 de Autor 1”
//”Ai citit deja “Carte 1” de Autor 1”
//”Carte 2 de Autor 2”
//”Trebuie sa citesti “Carte 2” de Autor 2”

const carti = [{ titluc: "Hobbitul", autor: "J.R.R. Tolkien", esteCitita: true }, { titluc: "8 laws of power ", autor: "Robert Greene", esteCitita: false }]

const verificareCarti = carti => {
  for (const carte of carti) {
    console.log(`Carte: ${carte.titluc} - Autor: ${carte.autor}`);
    
    if (carte.esteCitita) {
      console.log(`Ai citit deja ${carte.titluc} de ${carte.autor}`);
    } else {
      console.log(`Trebuie să citești ${carte.titluc} de ${carte.autor}`)
    }
  }
}

verificareCarti(carti);