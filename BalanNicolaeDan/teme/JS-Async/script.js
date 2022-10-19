// comentariile vor fi afisate intr-un tabel

const getData = async () => {
    try {
        const response = await axios.get("http://jsonplaceholder.typicode.com/comments")
        const data = response.data.map((comment) => {
            let { id, name, email, body } = comment;
            return { id, title: name, email, content: body }

        })
        constructDOM(data)

    } catch (error) {
        console.log("Ups , o eroare", error)
    }

}


const constructDOM = (data) => {
    const table = document.getElementById("tabel-container");

    const trFirst = document.createElement("tr");

    const thId = document.createElement("th");
    const thIdNode = document.createTextNode("ID");
    thId.append(thIdNode);

    const thTitle = document.createElement("th");
    const thTitleNode = document.createTextNode("Title");
    thTitle.append(thTitleNode);

    const thEmail = document.createElement("th");
    const thEmailNode = document.createTextNode("Email");
    thEmail.append(thEmailNode);

    const thContent = document.createElement("th");
    const thContentNode = document.createTextNode("Content");
    thContent.append(thContentNode);

    trFirst.append(thId);
    trFirst.append(thTitle);
    trFirst.append(thEmail);
    trFirst.append(thContent);

    table.append(trFirst);

    for (let line of data) {
        const tr = document.createElement("tr");

       for(let key in line){
            const td=document.createElement("td");
            const textNode=document.createTextNode(line[key]);
            td.append(textNode);
            tr.append(td);
       }
       table.append(tr);
       
    }


}

getData()