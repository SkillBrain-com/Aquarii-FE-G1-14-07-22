/**
 *  1. Scrieți o funcție care creează un obiect pentru a păstra informații despre rețeta ta preferată
 * Input: titlu = “Pizza”, portii = 3, ingrediente = [“sunca”, “cas”, “ketchup”]
 * Output: { titlu: “Pizza”, portii: 3, ingrediente: [”sunca”, “cas”, “ketchup”] }
 *
 * {title} String
 * {quantity} Number
 * {ingredients} Array of Strings
 */
const saveRecipe = (title, quantity, ingredients) => {
  const recipe = {
    title,
    quantity,
    ingredients
  };

  console.log("Title:", recipe.title);
  console.log("Quantity:", recipe.quantity);
  console.log("Ingredients:", recipe.ingredients);

  console.log("Recipe:", recipe);

  return recipe;
};

saveRecipe("Pizza", 3, ["sunca", "cas", "ketchup"]);

/**
 *  2. Scrieți o funcție care returnează un obiect nou fără proprietățile furnizate
 * Input: obiect = { a: 1, b: 2 }, proprietate = “b”
 * Output: { a: 1 }
 *
 * Parameters:
 * {object} Object
 * {propertyName} String
 */
const removeObjectProperty = (object, propertyName) => {
  console.log("Input:", object);
  delete object[propertyName];

  console.log("Output:", object);

  return object;
};

removeObjectProperty({ a: 1, b: 2 }, "b");

/**
*  3. Creați o șir de obiecte în care fiecare obiect descrie o carte și are proprietăți precum titlu (un șir de caractere - string), autor (un șir de caractere - string) și esteCitită (un boolean care indică dacă ați citit-o).
* Input: [ { titlu: "Carte 1", autor: "Autor 1", esteCitita: true }, { titlu: "Carte 2", autor: "Autor 2", esteCitita: false }, ];
* Output: “Carte 1 de Autor 1" ”Ai citit deja “Carte 1” de Autor 1” ”Carte 2 de Autor 2”
”Trebuie sa citesti “Carte 2” de Autor 2”
*
* Parameters:
* {books} Array
*/
const processBooks = (books) => {
  for (let i = 0; i < books.length; i++) {
    const book = books[i];

    console.log(`Cartea ${book.titlu} de autorul ${book.autor}`);

    if (book.esteCitita) {
      console.log(`Ai citit deja "${book.titlu}" de ${book.autor}`);
    } else {
      console.log(`Trebuie sa citesti "${book.titlu}" de ${book.autor}`);
    }
  }
};

processBooks([
  { titlu: "Carte 1", autor: "Autor 1", esteCitita: true },
  { titlu: "Carte 2", autor: "Autor 2", esteCitita: false }
]);
