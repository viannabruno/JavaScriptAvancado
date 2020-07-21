// Strict mode

// "use strict";

// function imprimir(){
//     var x =7;
//     console.log(x);
// }

// imprimir();
// console.log(x);
// console.log(window);

// Bind
// function sepeakGeneric(){
//     console.log(this.sound);
// }

// let dog = {
//     sound: "Au Au",
//     speak: sepeakGeneric

// }

// dog.speak();

// let cat = {
//     sound: "Miau",
//     speak: sepeakGeneric

// }

// cat.speak();

// let bindedFunction = sepeakGeneric.bind(dog);
// bindedFunction();


// ArrowFuncition

// let dobro = x => {
//     return 2*x;
// }
// let dobro = x => 2*x;

// console.log(dobro(5));

// Callback

// let usuarios = ["Joao", "Marcia", "Jose"];

// function inserirUsuario(nome, callback){

    // setTimeout(() => {
    //     usuarios.push(nome);
    //     callback();
    // }, 1000);

    // usuarios.push(nome);
// }

// function listarUsuarios(){
//     console.log(usuarios);
// }

// inserirUsuario("Bruno", listarUsuarios);
// listarUsuarios();

// Promises

// let usuarios = ["Joao", "Marcia", "Jose"];

// function inserirUsuario(nome){

//     let promise = new Promise(function(resolve, reject){

//         setTimeout(() => {
//             usuarios.push(nome);

//             let error = true;

//             if(!error){
//                 resolve();
//             } else {
//                 reject({msg:"Erro de qual quer coisa"});
//             }
            
//         }, 1000);

//     });

//     return promise;
   
// }

// function listarUsuarios(){
//     console.log(usuarios);
// }

// inserirUsuario("Bruno").then(listarUsuarios).catch((error) => {
//     console.log(error.msg);
// });

// Async Await - Uma outra maneira de usar promises

// let usuarios = ["Joao", "Marcia", "Jose"];

// function inserirUsuario(nome){

//     let promise = new Promise(function(resolve, reject){

//         setTimeout(() => {
//             usuarios.push(nome);

//             let error = false;

//             if(!error){
//                 resolve();
//             } else {
//                 reject({msg:"Erro de qual quer coisa"});
//             }
            
//         }, 1000);

//     });

//     return promise;
   
// }

// function listarUsuarios(){
//     console.log(usuarios);
// }

// async function executar(){

//     await inserirUsuario("Bruno");
//     listarUsuarios();
// }

// executar();

// Filter

// function novoAluno(nome, idade){
//     return {nome, idade};
// }

// let alunos = [
//     novoAluno("Mario", 23),
//     novoAluno("Jose", 45),
//     novoAluno("Marcia", 29),
//     novoAluno("Joao", 35)
// ];

// let jogadores = [
//     novoAluno("X", 23),
//     novoAluno("Y", 45),
//     novoAluno("Z", 29),
//     novoAluno("W", 35)
// ];

// function temMenosDeTrinta(aluno){
//     return aluno.idade < 30;
// }

// function temMaisDeTrinta(aluno){
//     return aluno.idade > 30;
// }


// console.log(alunos.filter(temMaisDeTrinta));

// console.log(jogadores.filter(temMenosDeTrinta));

// MAP

// function novoAluno(nome, idade){
//     return {nome, idade};
// }

// let alunos = [
//     novoAluno("Mario", 23),
//     novoAluno("Jose", 45),
//     novoAluno("Marcia", 29),
//     novoAluno("Joao", 35)
// ];

// function alunoDaqui5Anos(aluno){

//     return {
//         nome: aluno.nome,
//         idade:aluno.idade + 5
//     }

// }

// console.log(alunos.map(alunoDaqui5Anos));

// // Valor vs Referencia



// let alunoA = { nome: "X", idade: "15"}
// let alunoB = {...alunoA};

// alunoB.idade = 25;

// Spread Operator

// var pessoa = {
//     nome: "Joao Siva",
//     idade: 32,
// }

// var contato = {
//     telefone: 88888888,
//     email: "joao@gmail.com"
// }

// var copia = {...pessoa, ...contato}

// copia.idade = 88;

// console.log(pessoa);
// console.log(copia);

// Desestruturando um objeto

// var aluno = {
//     matricula: 1234,
//     nome: "Marcos",
//     telefone: 99999999,
//     cidade: "Cidade"
// }

// var aluno1 = {
//     matricula: 1235,
//     nome: "Joao",
//     telefone: 99999998,
//     cidade: "Cidade"
// }

// var alunos = [aluno, aluno1];

// var [marcos, joao ] = alunos;

// console.log(marcos);

// console.log(alunos);

// REDUCE

// function novoAluno(nome, idade){
//     return {nome, idade};
// }

// let alunos = [
//     novoAluno("X", 23),
//     novoAluno("Y", 45),
//     novoAluno("Z", 29),
//     novoAluno("W", 35)
// ];

// function idadeDaTurma(total, aluno){
//     return total + aluno.idade;
// } 

// console.log(alunos.reduce(idadeDaTurma, 0));

//Desafio

// function novoAluno(nome, idade) {
//     return { nome, idade }
// }

// let alunos = [
//         novoAluno("Mario", 23),
//         novoAluno("Jose", 45),
//         novoAluno("Marcia", 29),
//         novoAluno("Joao", 32)
//     ];

//Simular a função MAP
// function mapa(callback) {

//     let alunosMapeados = [];
//     for (aluno of alunos) {
//         alunosMapeados.push(callback(aluno));
//     }
//     return alunosMapeados;
// }

// function nomeEidade(aluno) {
//     return aluno.nome + " tem " + aluno.idade + " anos"
// }

// console.log(alunos.map(nomeEidade));
// console.log(mapa(nomeEidade));



//Simular a função Reduce
// let alunos = [{nome: "Nome1", idade: 20},
//             {nome: "Nome2", idade: 25},
//             {nome: "nome3", idade: 45}]

// function idadeTurma(total, aluno){
//     return total + aluno.idade;
// }

// // console.log(aluno.reduce(idadeTurma, 0));

// function funcaoReduce(callBack, inicio){
//     let total = 0;
//     for(aluno of alunos){
//         total += callBack(inicio, aluno);
//     }
//     return total;
// }

// console.log(funcaoReduce(idadeTurma, 0));


//FETCH

// https://api.exchangeratesapi.io/latest?base=USD&symbols=BRL



// fetch(url).then((res)=>{

//     return res.json();
    
// }).then((data)=>{
//     console.log(data.rates.BRL);
// });

// let url = "https://api.exchangeratesapi.io/latest?base=USD&symbols=BRL";

// function converter(){
//     let input = document.getElementById("valor");
//     let valor = input.value;

//     fetch(url).then((res) => {

//         return res.json();
        
//     }).then((data) => {
//         let rate = data.rates.BRL;

//         let resultado = `${valor} dolares = ${rate * valor} em reais`
//         document.getElementById("resultado").innerHTML = resultado;
//     });

// }

//Tratamento de erro Try-Catch

let nome = "";

try{

    if(nome == ""){
        throw "O nome não pode ser vazio";
    }

console.log(nome);
} catch(error) {
    console.log("Houve um erro", error);
} finally { 

    console.log("Boa Noite");
}
