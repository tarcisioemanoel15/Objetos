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
Validando.prototype.valida = function(){
    if(typeof this.limpo === 'undefined') return false;
    if(this.limpo.length !== 11) return false;
    if(this.isSequencia()) return false;

     const ncpf = this.limpo.slice(0, -2);
     const digito1 = this.criaD(ncpf); 
     const digito2 = this.criaD(ncpf + digito1); 
    
     const novo = ncpf + digito1 + digito2;
     return novo === this.limpo;
    }
    
    Validando.prototype.criaD = function(cria){
        const cpfarray = Array.from(cria);
        
        let regrecivo = cpfarray.length + 1;
        const tot = cpfarray.reduce((ac, valor) => {
            ac += (regrecivo * Number(valor));
            regrecivo--;
            return ac;
        }, 0);

        const digito = 11 - (tot % 11);
        return digito > 9 ? '0' : String(digito);

}
const cpf = new Validando('070.987.720-03');

if(cpf.valida()){
    console.log('VALIDO');
}else{
    console.log('INVALIDO');
}