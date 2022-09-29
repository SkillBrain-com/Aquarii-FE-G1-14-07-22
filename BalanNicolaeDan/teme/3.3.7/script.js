// Problema 1

const returnObject = (title,portions,ingredients) =>{
   const obj=
    {
        title : title,
        portions : portions,
        ingredients : ingredients
    }

    console.log(`title=${obj.title}`)
    console.log(`portions=${obj.portions}`)
    console.log(`ingredients=${obj.ingredients}`)
    
    return obj
}

const title="Pizza"
const portions=3
const ingredients=["sunca","cas","ketchup"]
console.log("***********Problema 1************")
returnObject(title,portions,ingredients)

// Problema 2

const deleteFromObject =(obj,prop) => {
    delete obj[prop]
    return obj
}

const obiect={a:"ceva",b:"altceva",c:"inca ceva"}

const proprietate="c"
console.log("***********Problema 2************")
console.log(deleteFromObject(obiect,proprietate))

// Problema 3

const processBooks = (listOfBooks) =>{
    for(let i=0;i<listOfBooks.length;i++){
        console.log(`Cartea  ${listOfBooks[i].titlu} de autorul ${listOfBooks[i].autor}`)
        if(listOfBooks[i].esteCitita){
            console.log(`-> Ai citit deja cartea ${listOfBooks[i].titlu} de autorul ${listOfBooks[i].autor}`)
        } else {
            console.log(`-> Trebuie sa citesti cartea ${listOfBooks[i].titlu} de autorul ${listOfBooks[i].autor}`)
        }
    }
}

const listaCarti=[
    {titlu:"Hobbitul",autor:"J.R.R. Tolkien",esteCitita:true},
    {titlu:"Toate panzele sus",autor:"Radu Tudoran",esteCitita:false},
    {titlu:"20000 de leghe sub mari",autor:"Jules Verne",esteCitita:true}
]
console.log("***********Problema 3************")
processBooks(listaCarti)