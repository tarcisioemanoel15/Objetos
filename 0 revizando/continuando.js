// Função fabrica
function pesoa(nome, sobrenome){
    return {nome, sobrenome,
        get Nomecompleto(){return  `${nome} ${sobrenome}`;
    }, 
}
};
const p0 = pesoa("João", "Joaquin");
console.log(p0.Nomecompleto);

//função construtora
function Pesoa (nome, sobrenome){this.nome = nome, this.sobrenome = sobrenome}

const p2 = new Pesoa("celio", 'Mandora');
const p1 = new Pesoa("Lito", 'bily');

//para travar o obj usa freeze  ex abaixo
Object.freeze(p1);

console.log(p2);
console.log(p1);


