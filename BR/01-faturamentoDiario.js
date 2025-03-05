/**
 *
 * 
 *  Faturamento Diário de uma Loja
 * 
    Descrição:
    Uma loja registra suas vendas diárias em uma lista. Dado um array de números inteiros onde cada elemento representa o faturamento diário, retorne o total faturado na semana.
 */

var faturamento = [250, 300, 400, 150, 200, 500, 600] // Input
// 2400  # Soma total das vendas - Output (Esperado)

var somaDoValorTotal = 0;
function somarFaturamento(){
    for(let i = 0; i<faturamento.length; i++){
        somaDoValorTotal += faturamento[i]
    }

    console.log(somaDoValorTotal)

}

somarFaturamento()