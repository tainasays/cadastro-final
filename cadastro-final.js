// Entrada

// var listaProduct =[];

function submeter(){

   
    




   let codigoInput = document.querySelector("#codigo").value;
   let produtoInput = document.querySelector("#produto").value;
   let quantInput = document.querySelector("#quant").value;
   let precoInput = document.querySelector("#preco").value;
   
   


// Processamento

const product = {
   codigo: codigoInput,
   produto: produtoInput,
   quantidade: quantInput,
   preco: precoInput,
};

// listaProduct.push(product);




console.table(product);




// Saída
let tabela = document.querySelector("table");

let linha = tabela.insertRow(1);

let cellCodigo = linha.insertCell(0);
let cellProduto = linha.insertCell(1);
let cellQuantidade = linha.insertCell(2);
let cellPreco = linha.insertCell(3);

cellCodigo.innerHTML = product.codigo;
cellProduto.innerHTML = product.produto;
cellQuantidade.innerHTML = product.quantidade;
cellPreco.innerHTML = product.preco;


}
