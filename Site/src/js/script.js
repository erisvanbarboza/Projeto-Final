const menu = document.querySelector("#menu");

const menus = [
    {
        nome: "Home",
        link: "./index.html",
    }, 
    {
        nome: "Sobre",
        link: "./sobre.html",
    }, 
    {
        nome: "Cadastro",
        link: "./cadastro.html",
    }
];

menus.forEach((item) => {

    let li = document.createElement("li");
    let link = document.createElement("a");

    li.classList.add("lista");
    menu.appendChild(li);
    link.innerText = item.nome;
    link.href= item.link;
    li.appendChild(link);
}) 






const pessoas = [];
const cadastro = document.querySelector(".cadastro");

const nome = document.querySelector("#nome");
const sobrenome = document.querySelector("#sobrenome");
const email = document.querySelector("#email");


function cadastrar() {
    
    // if (pessoas.value === ""){
    //     alert ("escreva no campo");
    // }else {
        const pessoa = {
            nome: nome.value,
            sobrenome: sobrenome.value,
            email: email.value,
        }
        pessoas.push(pessoa)
        percorrer();
        // console.log(pessoas);
    // }
    
};

let percorrer = () => {
    for (let i = 0; i < pessoas.length; i++){
        let pessoa = document.createElement("li");
        pessoa.innerHTML = `${pessoas[i].nome} | ${pessoas[i].sobrenome} | ${pessoas[i].email}`;
        cadastro.appendChild(pessoa);
    }
};