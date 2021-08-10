//só uma define Property  //varias define Properties
function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, //Mostra a chave;
        value: true, //O estoque;
        writable: true, //Pode alterar ou não;
        configurable: true, //configurvel;
    });
    
    Object.defineProperties(this, {
        nome:{
            //nome
        enumerable: true, //Mostra a chave;
        value: nome, //O estoque;
        writable: true, //Pode alterar ou não;
        configurable: true, //configurvel;
        },

        preco:{
        enumerable: true, //Mostra a chave;
        value: preco, //O estoque;
        writable: true, //Pode alterar ou não;
        configurable: true, //configurvel;
        },
    })   
    
    
    
}
    
const P1 = new Produto('Urso', 50, 9);
console.log(P1);