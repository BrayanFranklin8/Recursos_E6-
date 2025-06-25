let meuMap = new Map();
meuMap.set('nome','brayan');
meuMap.set('stack','html, css ,js');


console.log(meuMap);

const nome = meuMap.get('nome');

console.log(nome);
console.log(meuMap.size)
console.log(meuMap.has('sobrenome'))
// meuMap.clear()
console.log(meuMap.size)

for (let chave of meuMap.keys()){
    console.log(chave);
}

for (let valor of meuMap.values()){
    console.log(valor);
}

for (let[chave,valor] of meuMap.entries()){
    console.log(`${chave}: ${valor}`);
}

meuMap.delete('stack');

    console.log(meuMap);


const cpfs = new Set();

cpfs.add('23423949236')
cpfs.add('58743975394')
cpfs.add('81738127656')
cpfs.add('85454774500')

    console.log(cpfs);

    console.log(cpfs.keys());
    console.log(cpfs.values());

cpfs.forEach((valor) =>{
    console.log(valor);
})

const array = ['brayan','laura','jailson','robertinho','laura','brayan']

const arrayComoSet = new Set([...array]);

const arraySemItemsDuplicados = [...arrayComoSet]

console.log(arrayComoSet)
console.log(arraySemItemsDuplicados)









