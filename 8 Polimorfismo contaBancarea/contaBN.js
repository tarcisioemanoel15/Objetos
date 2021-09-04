function Conta(agencia, conta, saldo){
this.agencia = agencia,
this.conta = conta,
this.saldo = saldo
}

Conta.prototype.depositar = function(val){
    this.saldo += val;
    this.verSaldo();
};

Conta.prototype.sacar = function(val){
    if(val > this.saldo){
        console.log('Saldo invalido');
        return;
    }
    this.saldo -= val;
    this.verSaldo();
};
Conta.prototype.verSaldo = function(){
    console.log(`Conta e Agncia ${this.agencia} | ${this.conta} Seu saldo é :${this.saldo}`)
};

function Poupansa(agencia, conta, saldo, limite){
    Conta.call(this, agencia, conta, saldo); this.limite = limite;
}
Poupansa.prototype = Object.create(Conta.prototype);
Poupansa.prototype.constructor = Poupansa;
Poupansa.prototype.sacar = function(val){
    if( val > (this.saldo + this.limite)){
        console.log('Salllldo Invalido');
        return;
    }

    this.saldo -= val;
    this.verSaldo();
}


function Poupou(agencia, conta, saldo){
    Conta.call(this, agencia, conta, saldo);
}

Poupou.prototype = Object.create(Conta.prototype);
Poupou.prototype.constructor = Poupou;

                        



const pp = new Poupansa(9, 8, 100, 10);
pp.depositar(10)
pp.sacar(110);
console.log()
console.log()
console.log()
const ppp = new Poupou(1, 2, 100);
ppp.depositar(10)
ppp.sacar(100);
















