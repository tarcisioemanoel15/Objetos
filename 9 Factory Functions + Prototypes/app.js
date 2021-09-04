/*
    function cps(nome, sobrenome){
    const cpsproto = {
        fala(){console.log(`${nome} esta falando`)},
        comer(){console.log(`${nome} esta comendo`)},
        beber(){console.log(`${nome} esta bebendo`)},
    }
    return Object.create(cpsproto, {
        nome: {value:nome},
        sobrenome: {value:sobrenome}
    })
}
const p1 = cps('tarcisio', 'sobrenome');
console.log(p1.fala())
*/


const fala = {fala(){console.log(`${this.nome} esta falando`)}};
const comer = {comer(){console.log(`${this.nome} esta comendo`)}};
const beber = {beber(){console.log(`${this.nome} esta bebendo`)}};

const cppt = {...fala, ...comer, ...beber};

function cp(nome, sobrenome){
    return Object.create(cppt, {
        nome: {value: nome},
        sobrenome: {value: sobrenome},
    })

}

const p1 = cp('tarcisio', ' Emanoel');
const p5 = cp('tio', ' El');
p1.fala();
p5.fala();
p5.comer();