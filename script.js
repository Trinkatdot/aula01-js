//comentario em linha
//Exibir no terminal
console.log("Olá Mundo")
//Exibir no Navergador
document.write("olá navegador! 3");

/*
comentario de bloco
coment1
coment2
dakdasdas
*/

//caixas de alerta
//capturar nome do aluno
var nome = window.prompt("informe o nome:");
//guardar primeira nota
var nota1 = window.prompt("Digite a Nota 1");
//converte a nota de texto para decimal
nota1 = parseFloat(nota1);
//guardar segunda nota
var nota2 = window.prompt("Digite a Nota 2");
//converte de texto para decimal
nota2 = parseFloat(nota2);
//soma a media das duas notas
var media = (nota1 + nota2)/2;

/*
//gera exibição apenas com calculo da nota
window.alert("A média das notas é: " + media);
*/

//gera a mensagem com nome e nota do aluno
var mensagem = nome + ", você obteve a media : " + media;
window.alert(mensagem);