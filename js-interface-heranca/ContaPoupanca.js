import { ContaCorrente } from "../js-orientacaoObjetos/ContaCorrente.js";
import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta {

    static numeroDeContas = 0;
    //propriedades de instancias
    //devem ser definidas dentro dos 
    //metodos da classe
    constructor(saldoInicial, cliente, agencia) {
        super(saldoInicial, cliente, agencia)
        ContaPoupanca.numeroDeContas += 1
    }


    sacar(valor) {

        const taxa = 1.02;
        return this._sacar(valor, taxa)

    }
}