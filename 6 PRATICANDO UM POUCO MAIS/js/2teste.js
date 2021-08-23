function Guitar(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;

    let estoqueP = estoque;
    
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        //value: estoque,
        //writable: false, //configura estoque ?
        configurable: true,

        get: function(){return estoqueP; },
        set: function(valor){
            if(typeof valor !== 'number'){
                console.log("Invalido");
                return;
            }             
            estoqueP = valor;
        }
    });
}
            
const git1 = new Guitar('Tagima', 1500, 30);
git1.estoque = 5000;

const gitar = JSON.stringify(git1);
const estoquee = document.querySelector('#es');
    
function gaita(nome){
    return{ 
        get nome(){ return nome; },
        set nome (valor){ nome = valor; }
    }
}
const gaitaa = gaita('GaitaEmSol');

function clikk(){
    estoquee.innerHTML +=  `<p> ${gitar} ${gaitaa.nome} </p>`;
}




