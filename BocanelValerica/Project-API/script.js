
/**
 * function fetchData() {
  fetch("https://reqres.in/api/users")
    .then((response) => {
      if (!response.ok) {
        throw Error("Hopa Eroare :)))");
      }
      return response.json();
    })
    .then((data) => {
        console.log(data)
        getDoom(data)
    })
    .catch(error => {
        console.log(error)
    })
}

fetchData();

Salut Eric ! am facut si varianta cu fetch ca sa exersez .

 */


const getApi = async () => {
    const { data } = await axios.get("https://reqres.in/api/users")

    console.log(data)
    getDoomElements(data)
}

getApi()


function getDoomElements(data) {
    console.log(data.data);
      const html = data.data.map((user) => {
        return `
        <div class="user">
        <p><img src="${user.avatar}" alt="${user.first_name}"/></p>
        <p>Name : ${user.first_name}</p>
        <p>Last Name : ${user.last_name}</p>
        <p>Email : ${user.email}</p>
        </div>
        `
      }).join("")
      console.log(html)
      document.querySelector("#api").insertAdjacentHTML("afterbegin", html)
};


