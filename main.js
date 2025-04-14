function coletarCep() {
    let cep = document.querySelector("#cep").value
    console.log(cep)
    Dados(cep)
}

//https://viacep.com.br/ws/49090070/json/

async function Dados(cep) {
    let dados = await fetch(`https://viacep.com.br/ws/${cep}/json/`).then(res => res.json()) 
    console.log(dados) 
}

//permuta dos dados da tela

function dadosTela(dados) {
    document.querySelector("endereco").innerHTML = dados.logradouro 
    document.querySelector("#bairro").innerHTML = dados.bairro
    document.querySelector("cidade").innerHTML = dados.localidade
    document.querySelector("estado").innerHTML = dados.estado
    document.querySelector("regiao").innerHTML = dados.regiao
}