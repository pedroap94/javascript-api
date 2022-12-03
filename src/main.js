import Aluno from "./model/Aluno";

const urlBase = 'http://localhost:8080/alunos/';
const listarAlunos = 'listar-nota-alunos';
const alunos = new Array();
let soma = 0.0;
const resultadoMedia = document.querySelector('.resultadoMedia');
const botaoMedia = document.querySelector('.media');

fetch(urlBase + listarAlunos).then(dados => dados.json())
    .then(data => data.forEach(element => {
        alunos.push(element);
        soma += element.nota;
    }))

botaoMedia.onclick = function(){
    resultadoMedia.innerHTML = soma/alunos.length;
}


let a = new Aluno()