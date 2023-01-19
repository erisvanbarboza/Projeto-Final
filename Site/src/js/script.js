const pessoas = [];
const cadastro = document.querySelector(".cadastro");

const usuarios = {
    nome: document.querySelector("#nome").value,
    sobrenome: document.querySelector("#sobrenome").value,
    email: document.querySelector("#email").value,
}
pessoas.push(usuarios);

let cadastrar = () => {

    if (usuarios.value === ""){
        alert ("escreva no campo");
    }else {
        pessoas.push(usuarios)
        percorrer();
    }
};

let percorrer = () => {
    for (let i = 0; i < pessoas.length; i++){
        let pessoa = document.createElement("li");
        pessoa.innerHTML = pessoas[i];
        cadastro.appendChild(pessoa);

    }
};