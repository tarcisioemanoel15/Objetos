// OBJ literal
/*const pesoa = {nome : "Tarcisio", sobrenome: "Silva"}
console.log(pesoa.nome);
console.log(pesoa['nome']);
console.log(pesoa['sobrenome']);*/

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

// OBJ construtor
/*const pesoa1 = new Object();
pesoa1.nome = 'Luiz';   pesoa1.sobrenome = 'santos';
//delete pesoa1.nome;    
console.log(pesoa1.nome);
console.log(pesoa1.sobrenome);*/

const obj = new Object();

obj.nome = 'Emanoel'; 
obj.sobrenome = 'Bispo'; 
obj.idade = 30; 
obj.falarN = function(){
    return `${this.nome} esta falando`
},
obj.dataNa = function(){
    const dataatual = new Date();
    return dataatual.getFullYear() - this.idade;
}

for(let chave in obj){console.log(chave);}

console.log(obj.dataNa());
console.log(obj.falarN());








