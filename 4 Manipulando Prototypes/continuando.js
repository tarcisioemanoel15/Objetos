function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * (percentual / 100))
};

Produto.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco * (percentual / 100))
};

const camisetta = new Produto('camiseta', 10);

//camisetta.desconto(100);
camisetta.aumento(100);
console.log(camisetta);

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

const p2 = {
    nome: "cinto",
    preco: 15
}
Object.setPrototypeOf(p2, Produto.prototype);
p2.aumento(100)
console.log(p2);

console.log("//XXXXXXXXXXXXXXXXXXXXXX");
console.log("//XXXXXXXXXXXXXXXXXXXXXX");




const p3 = Object.create(Produto.prototype, {


    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 50
    },

    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 50
    }

});
//p3.preco = 150;
p3.aumento(100);
console.log(p3);


