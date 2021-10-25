function buscandoCep(dataCep){

    for(let campos in dataCep){
        if(document.querySelector(`#${campos}`)){
            document.querySelector(`#${campos}`).value = dataCep[campos];
        }

    }
}

const dadosCep = async function(cep){
    let url = `https://viacep.com.br/ws/${cep}/json/`;

    try {
        let consultaCep = await fetch(url);
        let cepJson = await consultaCep.json();
        buscandoCep(cepJson);
    }catch(error){
        alert(error);
    }
}

const btnBuscarCep = document.querySelector("#btn-Buscar");
const cxCep = document.querySelector("#cep");




export {dadosCep, cxCep, btnBuscarCep};