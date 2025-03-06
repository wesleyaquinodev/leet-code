function calcularValorHora(salarioMensal, horasTrabalhadasNoMes) {
    if (horasTrabalhadasNoMes <= 0) {
        throw new Error("A quantidade de horas trabalhadas no mês deve ser maior que zero.");
    }
    return salarioMensal / horasTrabalhadasNoMes;
}

const salario = 3000; 
const horasMensais = 160;
const valorHora = calcularValorHora(salario, horasMensais);
console.log(`O valor da hora trabalhada é R$ ${valorHora.toFixed(2)}`);