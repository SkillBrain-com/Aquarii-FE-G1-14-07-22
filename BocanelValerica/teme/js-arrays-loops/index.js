/** 1. Scrieți o funcție care creează un obiect pentru a păstra informații despre rețeta ta preferată

 * Input: titlu = “Pizza”, portii = 3, ingrediente = [“sunca”, “cas”, “ketchup”]
 * Output: { titlu: “Pizza”, portii: 3, ingrediente: [”sunca”, “cas”, “ketchup”] }
 */

 const storeRecipe = (title, portions, ingredients) => {
    const recipe = { title, portions, ingredients };
    console.log(`titlu ${recipe.title}`)
    console.log(`portions ${recipe.portions}`)
    console.log(`ingredients ${recipe.ingredients}`)
    console.log({ recipe })
    return recipe
  };
  
  storeRecipe("Pizza", 3, ["sunca", "cas", "ketchup"])
  
  /** 2. Scrieți o funcție care returnează un obiect nou fără proprietățile furnizate
   * Funcția primește 2 parametri ca date de intrare. Unul dintre parametri este obiectul, iar celălalt este proprietatea care nu se dorește să persiste în rezultatul returnat.
   * Input: obiect = { a: 1, b: 2 }, proprietate = “b”
   * Output: { a: 1 }
   */
  const removePropertyFromObject = (object, propertyName) => {
    const clonedObject = { ...object };
    console.log({ object, propertyName });
    console.log("Valoarea proprietatii:", object[propertyName]);
  
    delete clonedObject[propertyName];
    console.log({ object2: clonedObject });
  
    return clonedObject;
  }
  
  removePropertyFromObject({ a: 1, b: 2 }, "b")
  
  
  
  
  
  
  /** 3. Creați un șir de obiecte în care fiecare obiect descrie o carte și are proprietăți precum titlu (un șir de caractere - string), autor (un șir de caractere - string) și esteCitită (un boolean care indică dacă ați citit-o).
  Scrieți o funcție care:
      Iterează prin gama de cărți. Pentru fiecare carte se afișează titlul și autorul cărții astfel: “Hobbitul de J.R.R. Tolkien”.
      Utilizează o instrucțiune if / else ce modifică rezultatul, în funcție de faptul că ați citit-o sau nu. Dacă cartea a fost citită, se afișează cu ajutorul functiei console.log un mesaj de tipul “Ai citit deja “Hobbitul” de J.R.R. Tolkien”, iar dacă nu, se afișează un mesaj de tipul “Trebuie să citești “Hobbitul” de J.R.R. Tolkien”.
  
   * Input: [ { titlu: "Carte 1", autor: "Autor 1", esteCitita: true }, { titlu: "Carte 2", autor: "Autor 2", esteCitita: false }, ];
   *  Output:
  “Carte 1 de Autor 1”
  ”Ai citit deja “Carte 1” de Autor 1”
  ”Carte 2 de Autor 2”
  ”Trebuie sa citesti “Carte 2” de Autor 2”
   * 
   */
  const booksList = [
    { titlu: "Carte 1", autor: "Autor 1", esteCitita: true },
    { titlu: "Carte 2", autor: "Autor 2", esteCitita: false }
  ];
  
  const processBooks = (books) => {
    for (let book of books) {
      // “Hobbitul de J.R.R. Tolkien”.
      console.log(`${book.titlu} de ${book.autor} `);
      if (book.esteCitita === false) {
        console.log(`Trebuie sa citesti ${book.titlu} de ${book.autor}`);
      } else {
        console.log(`Ai citit deja ${book.titlu} de ${book.autor}`)
      }
    }
  }
  
  // console.log(book({ titlu: "Hobbitul", autor: "J.R.R. Tolkien", esteCitita: true }))
  
  
  processBooks(booksList)