/**
 * Tema-3-JavaScript-Obiecte
 */

/**
 *ex.1- Scrieți o funcție care creează un obiect pentru a păstra informații despre rețeta ta preferată.

Exemplu 1:

Input: titlu = “Pizza”, portii = 3, ingrediente = [“sunca”, “cas”, “ketchup”]

Output: { titlu: “Pizza”, portii: 3, ingrediente: [”sunca”, “cas”, “ketchup”] }
 */


const createRecipe = (titlu, portii,ingrediente) => {
    const myrecipe = {
       titlu,
       portii,
       ingrediente,
    };
 
    console.log("titlu:", myrecipe.titlu);
    console.log("portii:", myrecipe.portii);
    console.log("ingrediente:", myrecipe.ingrediente);
 
    return myrecipe;
 };
 
 createRecipe("pizza", 3, ["sunca", "cas", "ketchup"])
 
 // ex.2-Scrieți o funcție care returnează un obiect nou fără proprietățile furnizate
 /**
  * Input: obiect = { a: 1, b: 2 }, proprietate = “b”
 
 Output: { a: 1 }
  */
 
 
    const deleteObjectProperty = (object, property) => {
       const clonedObject = {...object};
       console.log("Input:", object, property)
       delete clonedObject[property]
       console.log("Output:",clonedObject);
     
     return clonedObject;
    }
 
    deleteObjectProperty({ a: 1, b: 2 }, "b")
 
 
     
 
 /* ex.3-Creați o șir de obiecte în care fiecare obiect descrie o carte și are proprietăți precum titlu (un șir de caractere - string), 
    autor (un șir de caractere - string) și esteCitită (un boolean care indică dacă ați citit-o).
    
    Input: [ { titlu: "Carte 1", autor: "Autor 1", esteCitita: true }, { titlu: "Carte 2", autor: "Autor 2", esteCitita: false }, ];
 
 Output:
 
 “Carte 1 de Autor 1”
 ”Ai citit deja “Carte 1” de Autor 1”
 ”Carte 2 de Autor 2”
 ”Trebuie sa citesti “Carte 2” de Autor 2”
 */

 
 const listOfBooks = [
    {titlu: "Carte 1", autor: "Autor 1", esteCitita: true },
    { titlu: "Carte 2", autor: "Autor 2", esteCitita: false },
 ];
 
 const processBooks = (books) => {
    for(let book of books) {
       console.log(`${book.titlu} de ${book.autor} `)
       if (book.esteCitita === false) {
          console.log(`Trebuie sa citesti ${book.titlu} de ${book.autor}`);
       }else{
          console.log(`Ai citit deja ${book.titlu} de ${book.autor}`) 
       }
    }
 };
 
 processBooks(listOfBooks);
     
     
     
     



