// const pessoas = [];
// const cadastro = document.querySelector(".cadastro");

// const nome = document.querySelector("#nome");
// const sobrenome = document.querySelector("#sobrenome");
// const email = document.querySelector("#email");

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
// pessoas.push(usuarios);

// let cadastrar = () => {

//     if (usuarios.value === ""){
//         alert ("escreva no campo");
//     }else {
//         pessoas.push(usuarios)
//         percorrer();
//     }
// };

// let percorrer = () => {
//     for (let i = 0; i < pessoas.length; i++){
//         let pessoa = document.createElement("li");
//         pessoa.innerHTML = pessoas[i];
//         cadastro.appendChild(pessoa);

//     }
// };