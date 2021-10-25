window.onload = function(){
    
    let produtos = [
        {descricao:"Maçã" , valor: 5.99},
        {descricao:"Pera" , valor: 7.99},
        {descricao:"Abacate" , valor: 4.59},
        {descricao:"Banana" , valor: 2.99},
        {descricao:"Kiwi" , valor: 12.29},
        {descricao:"Laranja" , valor: 2.59},
        {descricao:"Acerola" , valor: 3.79},
        {descricao:"Jabuticaba" , valor: 8.19},
    ];


(()=>{
    let listaProdutosEscolher = document.querySelector("ul#produtos");
    for(let produto in produtos){
        listaProdutosEscolher.innerHTML += `<li class='itemProdutoGeral' data-valor=${produtos[produto].valor}>${produtos[produto].descricao}</li>`
    }
}) (produtos);



const todosProdutosLista = document.querySelectorAll("li.itemProdutoGeral");
const itemCestaDoCliente = document.querySelector("ul#cestaDoCliente");
const somaTotalCompra = document.querySelector("#mostraTotalCompra");



const itensAddCesta = [];
let somaItensAdd = 0;

todosProdutosLista.forEach((item)=>{

    item.addEventListener('click', ()=>{
        
        if(itensAddCesta.indexOf(item.textContent) != -1) {
            alert(`Esse item ${item.textContent} já está na sua cesta`);
        }else{
            let li = document.createElement("li");
            itensAddCesta.push(item.textContent);
            itemCestaDoCliente.appendChild(li).textContent = item.textContent;
            somaItensAdd += Number(item.dataset.valor);
            somaTotalCompra.value = somaItensAdd.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'});
            elemento = document.querySelector("ul#produtos > li");
            elemento.parentNode.removeChild(item);
            document.querySelector('span').innerHTML = `${item.textContent} foi adicionado a lista`
        }
    })
})

}