function Guitar(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        value: estoque,
        writable: false, //configura estoque ?
        configurable: false,
    });
}
    
        
const git1 = new Guitar('Tagima', 1500, 30);
git1.estoque = 15;
 
const gitar = JSON.stringify(git1)
const estoquee = document.querySelector('#es');
    
function clikk(){ 
    estoquee.innerHTML = `${gitar}`;
 }



