import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    agencia;
    _cliente; //privado

    set cliente(novoValor) {

        if (novoValor instanceof Cliente) {
            this._cliente = novoValor
        }
    }

    get cliente() {
        return this._cliente
    }

    #saldo = 0; //privado
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