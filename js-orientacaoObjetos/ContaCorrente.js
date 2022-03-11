import { Cliente } from "./Cliente.js";

export class ContaCorrente {

   static numeroDeContas = 0;
    agencia;
    _cliente; //privado
    #saldo = 0; //privado

    constructor(cliente, agencia){
        this.agencia = agencia
        this._cliente = cliente
        ContaCorrente.numeroDeContas += 1;
    }

    set cliente(novoValor) {

        if (novoValor instanceof Cliente) {
            this._cliente = novoValor
        }
    }

    get cliente() {
        return this._cliente
    }


    sacar(valor) {
        if (this.#saldo >= valor) {
            this.#saldo -= valor;
            return valor
        }
    }

    get saldo() {

        return this.#saldo

    }

    depositar(valor) {

        if (valor < 0) {
            return;
        }
        this.#saldo += valor;
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado)
    }
}