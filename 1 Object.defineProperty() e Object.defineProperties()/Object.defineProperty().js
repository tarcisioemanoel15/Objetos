//só uma define Property  //varias define Properties
function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, //Mostra a chave;
        value: true, //O estoque;

        //se alterar para true pode alterar o valor
        writable: false, //Pode alterar ou não;

        //se code ou não fazer outra definição desa
        configurable: false, //configurvel;
    });
}

const P1 = new Produto('Camiseta', 25, 40);
const P2 = new Produto('Chorte', 10, 20);
//console.log(P1);
//console.log(P2);
//P1.estoque = 5000000000;
//console.log(P1);
console.log(Object.keys(P1));
for(let chave in P2){
    console.log(chave);
}