// 705.484.450-52   

function Validandocpf(enviacpf){
    Object.defineProperty(this, 'cpfLim', {
         enumerable: true,
        get: function(){
            return enviacpf.replace(/\D+/g, '')
        }
    })
}

Validandocpf.prototype.isSe = function(){
    const seq = this.cpfLim[0].repeat(this.cpfLim.length);
    return seq === this.cpfLim;
}

Validandocpf.prototype.valida = function(){
    if(typeof this.cpfLim === 'undefined') return false;
    if(this.cpfLim.length !== 11) return false;  
    if(this.isSe()) return false;

    const parcial = this.cpfLim.slice(0, -2);
    const digito0 = this.criaDigito(parcial);
    const digito1 = this.criaDigito(parcial + digito0);
    
    const novocpf = parcial + digito0 + digito1;
    return novocpf === this.cpfLim;
}

Validandocpf.prototype.criaDigito = function(cria){
    const cpfArrays = Array.from(cria);
    
    let re = cpfArrays.length + 1;
    const total = cpfArrays.reduce((ac, val) => {
    
        ac += (re * Number(val))
        re--;
        return ac;
    }, 0);

    const digito =  11 - (total % 11);
    return digito > 9 ? '0' : String(digito);
}
    
const cpf = new Validandocpf('705.484.450-52');

if(cpf.valida()){console.log('VALIDO')}
else{console.log('inVALIDO')}

