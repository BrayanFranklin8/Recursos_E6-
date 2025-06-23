const redeSociais = ['facebook','instagram','twitter'];

for (let i = 0; i < redeSociais.length; i++){
    console.log(`eu tenho perfil na rede social: ${redeSociais[i]}`)
};

redeSociais.forEach(function(nomeDaRedeSocial, indice){
    console.log(`#${indice} eu tenho perfil na rede social: ${nomeDaRedeSocial}`)
})

const alunos = ['Gustavo', 'Julia', 'Paula', 'Wagner']

const alunos2 = alunos.map(function(itemAtual){
    return {
        nome: itemAtual,
        curso: 'Frontend'
    }
})

console.log(alunos2)

const numeros = [1, 2, 3, 4, 5]
const dobroDosNumeros = numeros.map(function(numeroAtual){
    return numeroAtual * 2;
})

console.log(dobroDosNumeros)

const indiceDaPaula = alunos2.findIndex(function(item){
    return item.nome == 'Paula'
})

console.log(indiceDaPaula)

alunos2.push({
    nome: 'Lucio',
    curso:'Backend'
})

const todosAlunosSaoDeFrontend = alunos2.every(function(item){
    return item.curso === 'Frontend'
})

console.log(todosAlunosSaoDeFrontend)

const existeAlgumAlunoBackend = alunos2.some (function(item){
    return item.curso === 'Backend' && item.curso === 'Frontend'
})
console.log(existeAlgumAlunoBackend)

function filtraAlunosDeBackend(aluno) {
    return aluno.curso === 'Backend'
}

const filtraAlunoDeBackend2 = aluno => aluno.curso === 'Backend';

const alunosDeBackEnd = alunos2.filter(filtraAlunosDeBackend);

console.log(alunosDeBackEnd);

const nums = [10, 20, 30, 10 ]

const soma = nums.reduce(function(acumulador, itemAtual){
    acumulador += itemAtual;
    return acumulador;
},0)

console.log(soma);

let somaComFor = 0;

for (let i = 0;i < nums.length; i++){
    somaComFor += nums[i];
}

console.log(somaComFor)

const nomeDosAlunos = alunos2.reduce(function(acumulador,itemAtual){
    acumulador += `${itemAtual.nome} `;
    return acumulador;
},'')

console.log(nomeDosAlunos)

const numerosAFiltrar = [5,6,7,8,9,12,15,36]

const numerosMenores10 = numerosAFiltrar.filter(function(item){
    return item < 10;
})

console.log(numerosMenores10)

