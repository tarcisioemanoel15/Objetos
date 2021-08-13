//const produto = { nome: 'caneta', preso:1.50 };

/*
//copiar objeto
const maisProduto = { ...produto, cor: 'Azul'}
console.log(maisProduto);
*/

/*
//copiar objeto
const maisProduto = Object.assign({}, produto, {cor: 'Azul' , corr: "preta"} );
console.log(maisProduto);
*/

/*
//copiar objeto
const maisProduto = {preso: produto.preso};
console.log(maisProduto);
*/

/*
//mostra a chave do obj [intera no obj]
console.log(Object.keys(produto));
*/

/*
//para o obj não ser alteraso
Object.freeze(produto);
//aque não altera
produto.nome = "T";
console.log(produto);
*/



const produtos = { nome: 'caneta', preso:1.50 };
/*
*/
Object.defineProperty(produtos, 'nome', {
    writable: false,
    enumerable:false,
    configurable: true,
    value: 'qualquer coisa',
});


//este obj intera nete obj que esta a cima
console.log(Object.getOwnPropertyDescriptor(produtos, 'nome'));







