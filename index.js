function pegarCpf() {
    cpf = document.getElementById('cpf').value;
    cpfDividido = cpf.substr();
    d1 = cpfDividido[0] * 10;
    d2 = cpfDividido[1] * 9;
    d3 = cpfDividido[2] * 8;
    d4 = cpfDividido[3] * 7;
    d5 = cpfDividido[4] * 6;
    d6 = cpfDividido[5] * 5;
    d7 = cpfDividido[6] * 4;
    d8 = cpfDividido[7] * 3;
    d9 = cpfDividido[8] * 2;
    res = d1 + d2 + d3 + d4 + d5 + d6 + d7 + d8 + d9;
    mult = res * 10;
    div = mult % 11;
    if (div == 10 || div == 11) {
        div = 0;
    }
    if (div != cpfDividido[9]) {
        return "Invalido!";
    }
    else {
        cpf = document.getElementById('cpf').value;
        cpfDividido = cpf.substr();
        d1 = cpfDividido[0] * 11;
        d2 = cpfDividido[1] * 10;
        d3 = cpfDividido[2] * 9;
        d4 = cpfDividido[3] * 8;
        d5 = cpfDividido[4] * 7;
        d6 = cpfDividido[5] * 6;
        d7 = cpfDividido[6] * 5;
        d8 = cpfDividido[7] * 4;
        d9 = cpfDividido[8] * 3;
        d10 = cpfDividido[9] * 2;
        res = d1 + d2 + d3 + d4 + d5 + d6 + d7 + d8 + d9 + d10;
        mult = res * 10;
        div = mult % 11;
        if (div == 10 || div == 11) {
            div = 0;
        }
        if (div != cpfDividido[10]) {
            return "Invalido!";
        }
        else {
            return "Valido";
        }
    }
}
