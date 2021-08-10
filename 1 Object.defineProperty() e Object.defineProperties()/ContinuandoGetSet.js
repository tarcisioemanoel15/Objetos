//dfineproperty -> GETTER e SETTER 
function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;

    Object.defineProperty(this, "estoque", {
        enumerable:true,
        value:estoque,
        writable:true,
        configurable:true
    });
}

const p1 = new Produto('Maçã', 100, 5);
//console.log(Object.keys(p1));

for(let ch in p1){
    console.log(ch);
}