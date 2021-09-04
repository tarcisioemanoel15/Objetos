function ContaBN(){
    function Conta(agencia, conta, saldo){
        this.agencia = agencia;
        this.conta = conta; this.saldo = saldo;
    }

    Conta.prototype.depositar = function(val){
        this.saldo += val;
        this.verSaldo();
    };

    Conta.prototype.sacar = function(val){
        if(val > this.saldo){
        console.log('Valor ivalido');
        return;
    }
    this.saldo -= val;
    this.verSaldo();
}

Conta.prototype.verSaldo = function(){
    console.log(`Ag/ ${this.agencia}, Conta/ ${this.conta}, Saldo/ ${this.saldo}`);
}
function Contacorente(agencia, conta, saldo, limite){
    Conta.call(this, agencia, conta, saldo); 
    this.limite = limite;
}
Contacorente.prototype = Object.create(Conta.prototype);
Contacorente.prototype.constructor = Contacorente;
Contacorente.prototype.sacar = function(val){
    if(val > (this.saldo + this.limite)){
        console.log('colocar Mais dinheiro');
        return;
    }
    this.saldo -= val;
    this.verSaldo();   
}
function ContaPoupansa(agencia, conta, saldo){ 
    Conta.call(this, agencia, conta, saldo);
}
ContaPoupansa.prototype = Object.create(Conta.prototype);
ContaPoupansa.prototype.constructor = ContaPoupansa;

const conta1 = new Conta(11, 12, 0);
conta1.depositar(10)
conta1.sacar(5)

console.log();
console.log();

const conta2 = new Contacorente(12, 13, 0, 10);
conta2.depositar(10);
conta2.sacar(21);

console.log();
console.log();

const conta3 = new ContaPoupansa(13, 14, 500);
conta3.depositar(100);
conta3.sacar(500);
}

 ContaBN()




 console.log()
 console.log()
 console.log()
/*Validando CPF*/
function validaCpf(){

    function validacpf(enviocpf){
        Object.defineProperty(this, 'cpfLimpo', {
        // enumerable: true,
        get: function(){
            return enviocpf.replace(/\D+/g, '') } }) 
        }
           
        validacpf.prototype.isSequencia = function(){
const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
return sequencia === this.cpfLimpo;
}

validacpf.prototype.valida = function(){
    if(this.cpfLimpo.length !== 11 ) return false;
    if(typeof this.cpfLimpo === 'undefined') return false;
    if(this.isSequencia()) return false;
    
    const cpn = this.cpfLimpo.slice(0, -2);
    const cpn1 = this.conta(cpn); 
    const cpn2 = this.conta(cpn + cpn1);
    const novocpf = cpn + cpn1 + cpn2;
    return novocpf === this.cpfLimpo;
}
    
validacpf.prototype.conta = function(cn){
    const cpfArry = Array.from(cn);
    let reduzido = cpfArry.length + 1;
    const total = cpfArry.reduce((ac, val) => {

        ac += (reduzido * Number(val))
        reduzido--
        return ac;
    
    }, 0) 

    const conFeita = 11 - (total % 11);
    return conFeita > 9 ? '0' : String(conFeita);
}
        
const cpf = new validacpf('000.000.000-00');
console.log(cpf.valida())
}
validaCpf()