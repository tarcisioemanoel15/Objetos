/*function pessoa(nome, sobrenome){
    return{
        nome, sobrenome,
        falar(){ console.log(`${nome} esta falndo`); },
        comer(){ console.log(`${nome} esta comendo`); },
        beber(){ console.log(`${nome} esta bebendo`); },
    }
}

const pesoa1 = pessoa("Tarcisio", 'Emanoel');
console.log(pesoa1.falar());
console.log(pesoa1.comer());
console.log(pesoa1.beber());*/

//Ideal

/*function pessoa(nome, sobrenome){
    const pesoaProto = {
        falar(){ console.log(`${nome} esta falndo`); },
        comer(){ console.log(`${nome} esta comendo`); },
        beber(){ console.log(`${nome} esta bebendo`); },
    };
    
    return Object.create(pesoaProto, {
        nome: {value : nome},
        sobrenome: {value : sobrenome}
    } );
}

const p1 = pessoa("Tarcisio", 'Emanoel');
const p2 = pessoa("Andressa", 'Bispo');
console.log(p1.falar());*/    


// Outra maneira Desacoplando
//(OBS tem que colocar o this)

const falar = {
    falar(){ console.log(`${this.nome} esta falndo`); },
}
const comer = {
    comer(){ console.log(`${this.nome} esta comendo`); },
}

const beber = {
    beber(){ console.log(`${this.nome} esta bebendo`); },
}

const pesoaProto = Object.assign({}, falar, comer, beber);

/*
Outra Maneira de copiar
const pesoaProto = {...falar, ...comer, ...beber};
    */
function pessoa(nome, sobrenome){
    
    
    return Object.create(pesoaProto, {
        nome: {value : nome},
        sobrenome: {value : sobrenome}
    } );
}

const p1 = pessoa("Tarcisio", 'Emanoel');
const p2 = pessoa("Andressa", 'Bispo');
// console.log(p1.falar());