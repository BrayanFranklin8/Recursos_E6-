"use strict";

var redeSociais = ['facebook', 'instagram', 'twitter'];
for (var i = 0; i < redeSociais.length; i++) {
  console.log("eu tenho perfil na rede social: ".concat(redeSociais[i]));
}
;
redeSociais.forEach(function (nomeDaRedeSocial, indice) {
  console.log("#".concat(indice, " eu tenho perfil na rede social: ").concat(nomeDaRedeSocial));
});
var alunos = ['Gustavo', 'Julia', 'Paula', 'Wagner'];
var alunos2 = alunos.map(function (itemAtual) {
  return {
    nome: itemAtual,
    curso: 'Frontend'
  };
});
console.log(alunos2);
var numeros = [1, 2, 3, 4, 5];
var dobroDosNumeros = numeros.map(function (numeroAtual) {
  return numeroAtual * 2;
});
console.log(dobroDosNumeros);
var indiceDaPaula = alunos2.findIndex(function (item) {
  return item.nome == 'Paula';
});
console.log(indiceDaPaula);
alunos2.push({
  nome: 'Lucio',
  curso: 'Backend'
});
var todosAlunosSaoDeFrontend = alunos2.every(function (item) {
  return item.curso === 'Frontend';
});
console.log(todosAlunosSaoDeFrontend);
var existeAlgumAlunoBackend = alunos2.some(function (item) {
  return item.curso === 'Backend' && item.curso === 'Frontend';
});
console.log(existeAlgumAlunoBackend);
function filtraAlunosDeBackend(aluno) {
  return aluno.curso === 'Backend';
}
var filtraAlunoDeBackend2 = function filtraAlunoDeBackend2(aluno) {
  return aluno.curso === 'Backend';
};
var alunosDeBackEnd = alunos2.filter(filtraAlunosDeBackend);
console.log(alunosDeBackEnd);
var nums = [10, 20, 30, 10];
var soma = nums.reduce(function (acumulador, itemAtual) {
  acumulador += itemAtual;
  return acumulador;
}, 0);
console.log(soma);
var somaComFor = 0;
for (var _i = 0; _i < nums.length; _i++) {
  somaComFor += nums[_i];
}
console.log(somaComFor);
var nomeDosAlunos = alunos2.reduce(function (acumulador, itemAtual) {
  acumulador += "".concat(itemAtual.nome, " ");
  return acumulador;
}, '');
console.log(nomeDosAlunos);
var numerosAFiltrar = [5, 6, 7, 8, 9, 12, 15, 36];
var numerosMenores10 = numerosAFiltrar.filter(function (item) {
  return item < 10;
});
console.log(numerosMenores10);