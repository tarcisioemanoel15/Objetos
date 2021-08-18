// Instrumento -> auento e desconto
// violão, guitarra, violino

function Instrumentos(nome, preco, cor){
    this.nome = nome;
    this.preco = preco;
    this.cor = cor;
}
Instrumentos.prototype.aumento = function(quantia){this.preco += quantia;};
Instrumentos.prototype.desconto = function(quantia){this.preco -= quantia;};

//auterando o aumenta de cima
Instrumentos.prototype.aumento = function(percentual){this.preco = this.preco + (this.preco * (percentual / 100));}
function Guitarra(nome, preco, cor){ Instrumentos.call(this, nome, preco, cor)};

Guitarra.prototype = Object.create(Instrumentos.prototype);
Guitarra.prototype.constructor = Guitarra;

const guitar = new Guitarra('Menfis', 650, 'Amarelo');
const guitarra = new Guitarra('tagima', 1000, 'Azul');
guitarra.aumento(10);

//console.log(guitarra);
//console.log(guitar);

function Violao(nome, preco, material){Instrumentos.call(this, nome, preco, material); this.material = material; }
Violao.prototype = Object.create(Instrumentos.prototype);
Violao.prototype.constructor = Violao;

const violao = new Violao('viola', 500, 'Madeira');

//console.log(violao)

/**/

function Violino(nome, preco, cor){
    Instrumentos.call(this, nome, preco, cor);
     // ERRO  this.material = this.material;

    Object.getPrototypeOf(this, 'estoque', {
        enumerable: true,
        configurabçe: false,

        get: function(){
            return estoque;
        },
        set: function(valor){
            if(typeof valor !== 'number') return;
            estoque = valor;
        }
    })
}

Violino.prototype = Object.create(Instrumentos.prototype);
Violino.prototype.constructor = Violino;

                                                //, 'madeira' 
const violino = new Violino('violino', 500, 'Vermelha');
violino.estoque = 10;

console.log(violino);