//GETTER para obeter o valor  //SETTER para configurar o valor
//dfineproperty -> GETTER e SETTER 
function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;
    //   this.estoque = estoque;
    let estoquePrivado = estoque;
    Object.defineProperty(this, "estoque", {
        enumerable:true,
        configurable:true,

        get: function(){
            return estoquePrivado;
        },

        //set só convigura não mostra nada
        set: function(valor){
            if(typeof valor !== 'number'){
                console.log('Invalido');
                return;
            }
            estoquePrivado = valor;
         }
    });
}
const p2 = new Produto('Carro', 100, 50);
const p1 = new Produto('Maçã', 100, 5);
p1.estoque = 10000000000;
//console.log(p1.estoque)
p2.estoque = 6;
//console.log(p2.estoque)
        
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

//[OBS] neste não precisa do this
function produtto(nome){
    return {
        get nome(){
            return nome;
        },

        set nome(valorr){
            nome = valorr;
        }
    }
}



const pro = produtto('bomba');
pro.nome = 'Viola';
console.log(pro.nome);
