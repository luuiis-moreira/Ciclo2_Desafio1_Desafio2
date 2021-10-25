import {dadosCep, btnBuscarCep, cxCep} from './meAchaCep.js';


btnBuscarCep.addEventListener('click', function(){
    dadosCep(cxCep.value)
})
