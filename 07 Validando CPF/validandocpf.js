// 705.484.450-52   070.987.720-03

function Validacp(enviocp){
Object.defineProperty(this, 'cpfLimpo', {
    enumerable: true,
    get: function(){
        return enviocp.replace(/\D+/g, '')
    }
})
}

Validacp.prototype.valido = function(){
    if(typeof this.cpfLimpo === 'undefined') return false;
    if(this.cpfLimpo.length !== 11 ) return false;

    if(this.isSequncia()) return false;

    const cporigem = this.cpfLimpo.slice(0, -2);
    const digito1 = this.criaDigito(cporigem);
    const digito2 = this.criaDigito(cporigem + digito1);
    
    const novo = cporigem + digito1 + digito2;
    return novo === this.cpfLimpo;
}


Validacp.prototype.isSequncia = function(){
    const sequncia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    return sequncia === this.cpfLimpo;
}




Validacp.prototype.criaDigito = function(parcialdi){
    const cpfarray = Array.from(parcialdi);
    let regrecivo = cpfarray.length + 1;
    
    const total = cpfarray.reduce((ac, val) => {

        ac += (regrecivo * Number(val));
        regrecivo--;
        return ac;
    }, 0);

    const digito = 11 - (total % 11);
    return digito > 9 ? '0' : String(digito);
}

const cpf = new Validacp('705.484.450-52');
if(cpf.valido()){
    console.log('VALIDO')
}else{
    console.log('inVALIDO')

}


