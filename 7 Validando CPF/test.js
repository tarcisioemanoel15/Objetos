function Validando(enviocpf){

    Object.defineProperty(this, 'limpo', {
        enumerable: true,
        get: function(){
            return enviocpf.replace(/\D+/g, '');
        }
    })
}

Validando.prototype.isSequencia = function(){
    const sequencia = this.limpo[0].repeat(this.limpo.length);
    return sequencia === this.limpo;
}    

Validando.prototype.valido = function(){
    if(typeof this.limpo === 'undefined') return false;
    if(this.limpo.length !== 11) return false;
    if(this.isSequencia()) return false;


    const pacial = this.limpo.slice(0, -2);
    const digito1 = this.criaDigito(pacial);
    const digito2 = this.criaDigito(pacial + digito1);
    
    const novocpf = pacial + digito1 + digito2;
    
    return novocpf === this.limpo;
}

Validando.prototype.criaDigito = function(nd){
const cpfarray = Array.from(nd);
let re = cpfarray.length + 1;

const total = cpfarray.reduce((acumulador, valor) => {
    acumulador += (re * valor)
    re--;
    return acumulador;
}, 0);

const digito = 11 - (total % 11);
return digito > 9 ? '0' : String(digito);
}

const cpf = new Validando('070.987.720-03');

if(cpf.valido()){console.log('VALIDO');}
else{console.log('INVALIDO');}