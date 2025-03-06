// Retorne a Data Anterior
// Retorne a Data Atual 
// Retorne a Data Próxima 


var dataAtual = new Date()
var proximaData = new Date(dataAtual)
var dataAnterior = new Date(dataAtual)

proximaData.setDate(dataAtual.getDate() + 1)
dataAnterior.setDate(dataAtual.getDate() - 1)

console.log('Ontem foi: ',dataAnterior.toLocaleDateString('BR'))
console.log('Hoje é: ', dataAtual.toLocaleDateString('BR'))
console.log('Amanhã vai ser:  ',proximaData.toLocaleDateString('BR'))


if(dataAtual > dataAnterior){
    console.log('teste')
}