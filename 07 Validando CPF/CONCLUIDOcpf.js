// 705.484.450-52   070.987.720-03

function Validacpf(cpfenviado){
    Object.defineProperty(this, 'cpflinpo', {
        enumerable: true,
        get: function(){
            return cpfenviado.replace(/\D+/g,  '');
        }
    });
}

Validacpf.prototype.valida = function(){
    if(typeof this.cpflinpo === 'undefined') return false;
    if(this.cpflinpo.length !== 11 ) return false;
    
    if(this.isSequencia()) return false; 

    const cpfparcial = this.cpflinpo.slice(0, -2);
    const digito1 = this.criadigito(cpfparcial);
    const digito2 = this.criadigito(cpfparcial + digito1);
    const novocpf = cpfparcial + digito1 + digito2;

    return novocpf === this.cpflinpo;
};
    
Validacpf.prototype.criadigito = function(parcial){
    const cpfArray = Array.from(parcial);
    let regrcivo = cpfArray.length + 1 ;
    const total = cpfArray.reduce((ac, val) => {
        ac += (regrcivo * Number(val))
        regrcivo--;
        return ac;
    }, 0);
    
    const digito = 11 - (total % 11);
    return digito > 9 ? '0' : String(digito);
};
    
Validacpf.prototype.isSequencia = function() {
    const sequencia = this.cpflinpo[0].repeat(this.cpflinpo.length);
    return sequencia === this.cpflinpo;
};




//111.111.111-11
const cpf = new Validacpf('070.987.720-03'); 
// console.log(cpf.cpflinpo)
// console.log(cpf.valida())

console.log(cpf.valida())
/*
if(cpf.valida()){
    console.log('CPF VALIDO');
    
    }else{
        
        console.log('cpf Invalido');
}
    */