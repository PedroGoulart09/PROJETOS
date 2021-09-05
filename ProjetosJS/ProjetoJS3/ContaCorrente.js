export class ContaCorrente {
    constructor(agencia, saldo, cliente) {
        this.agencia = agencia;
        this.cliente = cliente;
        this.saldo = saldo;

    }

    sacar(valor) {
        if (this.saldo >= valor)
            this.saldo -= valor
        return valor;
    }


    depositar(valor) {
        if (this.valor <= 0) {
            return;
        }
        this.saldo += valor;

    }
    transferir(valor, conta) {

        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}