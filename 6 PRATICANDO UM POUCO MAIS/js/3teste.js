function Instrumentos(nome, valor, cor){
    this.nome = nome; this.valor = valor; this.cor = cor;
}

Instrumentos.prototype.aumento = function(quantia){
     this.valor += quantia;
    }
Instrumentos.prototype.desconto = function(quantia){
    this.valor -= quantia;
}

const gaita = new Instrumentos('Gaita', 100, 'prata' );
const teclado = new Instrumentos('Teclado', 508000, 'black piano' );
  gaita.desconto(10);
//gaita.aumento(10);

const gaitta = JSON.stringify(gaita);
const tteclado = JSON.stringify(teclado);

const res0 = document.querySelector('#a0')
const res1 = document.querySelector('#b0')

const sect = document.querySelector('#sec');

function Guitarra(nome, valor, cor, cordas ){
    Instrumentos.call(this, nome, valor, cor );
    this.cordas = cordas;
}

Guitarra.prototype = Object.create(Instrumentos.prototype);
Guitarra.prototype.constructor = Guitarra;

const guitar = new Guitarra('Tagima', 1000, 'laranja com bordas preta', '2 jogos de cordas grates');
guitar.desconto(20);
const g = JSON.stringify(guitar);
const res2 = document.querySelector('#c0')




function Violao(nome, valor, cor, concertos, estoque){
    Instrumentos.call(this, nome, valor, cor);
    this.concertos = concertos;

    Object.defineProperty(this, 'estoque', {
        enumerable:true,
        configurable:true,

        get: function(){
            return estoque;
        },
        set: function(valor){
           if(typeof valor !== 'number') return;
            
              estoque = valor;
        }
    });
}

const viola = new Violao('Violão', 500, 'a cor que quiser', 'gratuito', 100);
const res3 = document.querySelector('#d0');
const v = JSON.stringify(viola);

sect.addEventListener('click', function(e){
    let el = e.target;
    if(el.classList.contains('A0')){ res0.innerHTML = gaitta; }
    if(el.classList.contains('B0')){ res1.innerHTML = tteclado; }

    if(el.classList.contains('C0')){ res2.innerHTML = g;}

    if(el.classList.contains('D0')){res3.innerHTML = v; }
});
