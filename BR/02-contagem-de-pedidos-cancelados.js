/**
 * 
 *  Contagem de Pedidos Cancelados
 * 
    Descrição:
    Uma empresa de delivery armazena os pedidos em uma lista. Os pedidos cancelados são representados por "C". Retorne a quantidade de pedidos cancelados.
 * 
    Exemplo de Entrada:
    pedidos = ["Aprovado", "Cancelado", "Entregue", "Cancelado", "Aprovado"]

    Saída Esperada:
    2
 */


var pedidos = ["Aprovado", "Cancelado", "Entregue", "Cancelado", "Aprovado"]

var array = [];

function teste(){
    var novoArray = pedidos.filter((element) => {
        // array.indexOf(element) !== index
        console.log(element == 'Cancelado')
    })
    console.log(novoArray)
}


teste()