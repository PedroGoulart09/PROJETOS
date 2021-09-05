    import { Cliente } from "./Cliente.js";
    import { ContaCorrente } from "./ContaCorrente.js";

    const cliente1 = new Cliente('Pedro', 12121212121);



    const cliente2 = new Cliente('João', 2342342);


    const contaCorrentePedro = new ContaCorrente();

    contaCorrentePedro.agencia = 1001;
    contaCorrentePedro.saldo = 1000;
    contaCorrentePedro.cliente = cliente1;


    let valor = 499;

    const conta2 = new ContaCorrente();
    conta2.cliente = cliente2;
    conta2.agencia = 1512;
    conta2.saldo = 500;
    conta2.sacar(valor);



    console.log(contaCorrentePedro)
    console.log(conta2);