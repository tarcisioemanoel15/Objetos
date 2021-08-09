//Nada inportante só fazendo alguns testes

/*
function Pesoa(nome, sobrenome){
    this.nome = nome,
    this.sobrenome = sobrenome
}

const p = new Pesoa('t123', 'a45654');
console.log(p);
*/
/*
const ps = {
    nome: 'tar',
    sobre: 'em'
}

console.log(ps.nome);
*/

function pes(nome,sobren){
    return {nome, sobren}
}
const pess = pes('MMMMMM', 'NNNNNNNNNN');
console.log(pess.nome, pess.sobren)