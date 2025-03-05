function validarCPF(cpf) {

    if (typeof cpf !== 'string' || !/^\d{11}$/.test(cpf)) {
        return { valido: false, mensagem: "CPF deve conter exatamente 11 dígitos numéricos." };
    }


    const cpfsInvalidos = [
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999',
        '12345678909'
    ];

    if (cpfsInvalidos.includes(cpf)) {
        return { valido: false, mensagem: "CPF inválido: sequência repetida ou CPF conhecido como inválido." };
    }


    const calcularDigito = (cpf, limite) => {
        let soma = 0;
        for (let i = 0; i < limite; i++) {
            soma += Number(cpf[i]) * (limite + 1 - i);
        }
        const resto = soma % 11;
        return resto < 2 ? 0 : 11 - resto;
    };


    const primeiroDigito = calcularDigito(cpf, 9);
    const segundoDigito = calcularDigito(cpf, 10);

    if (primeiroDigito !== Number(cpf[9])) {
        return { valido: false, mensagem: "CPF inválido: primeiro dígito verificador incorreto." };
    }

    if (segundoDigito !== Number(cpf[10])) {
        return { valido: false, mensagem: "CPF inválido: segundo dígito verificador incorreto." };
    }

    return { valido: true, mensagem: "CPF válido." };
}

// Testes
console.log(validarCPF("12345678909")); 
console.log(validarCPF("52998224725")); 
console.log(validarCPF("11111111111")); 
