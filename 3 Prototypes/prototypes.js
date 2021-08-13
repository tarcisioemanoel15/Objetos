

function Pesoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    //this.nomecompleto = () => ` ORIGINAL ${nome} dos ${sobrenome}`;
    
} 

//Pesoa.prototype === p1._proto_

const p1 = new Pesoa('Tarrr', 'Emmmma');
const p2 = new Pesoa('Ivaneide', 'Rosa');
const data = new Date();

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

// evitamos sobescrever nome completo

Pesoa.prototype.nomecompleto = function(){
    return `${this.nome} dos ${this.sobrenome}`;
}

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX


console.log(p1.nomecompleto());
console.log(p2.nomecompleto());
console.log(data);