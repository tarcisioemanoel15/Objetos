function  Conta(agencia, conta, saldo){
    this.conta = conta;
    this.agencia = agencia;
    this.saldo = saldo;
}
Conta.prototype.sacar = function(valor){
    if(valor > this.saldo){
        console.log(`Saldo insuficiente ${this.saldo}`);
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
}
Conta.prototype.depositar = function(valor){
    this.saldo += valor;
    this.verSaldo();
}
Conta.prototype.verSaldo = function(){
    console.log(`Ag/c: ${this.agencia} | ${this.conta} | ` +
    `Saldo: R$ ${this.saldo.toFixed(2)}`
    );
}
/*
const conta1 = new Conta(0001, 22, 10);
conta1.depositar(10);
conta1.depositar(21);
conta1.sacar(1);
*/
function ContaCorrente(agencia, conta, saldo, limite){
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}
ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;
ContaCorrente.prototype.sacar = function(valor){
    if(valor > (this.saldo + this.limite)){
        console.log(`saldo insuficiente ${this.saldo}`)
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
}

function Contapoupansa(agencia, conta, saldo){
    Conta.call(this, agencia, conta, saldo);
}
Contapoupansa.prototype = Object.create(Conta.prototype);
Contapoupansa.prototype.constructor = Contapoupansa;

const cc = new ContaCorrente(01, 21, 0,100); 
cc.depositar(10);
cc.depositar(90);
cc.sacar(50);
cc.sacar(30);
cc.sacar(21);

console.log();

const cp = new Contapoupansa(02, 12, 50 );
cp.depositar(10);
cp.depositar(90);
cp.sacar(50);
cp.sacar(30);
cp.sacar(81);