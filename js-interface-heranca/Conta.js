
//classe abstrata: somente deve ser herdada
export class Conta {

    static numeroDeContas = 0;
    //propriedades de instancias
    //devem ser definidas dentro dos 
    //metodos da classe
    constructor(saldoInicial, cliente, agencia) {

        if(this.constructor == Conta){
            throw new Error("Você não deveria instanciar um objeto do tipo conta diretamente")
        }
        this._saldo = saldoInicial
        this._cliente = cliente
        this._agencia = agencia
        Conta.numeroDeContas += 1;



    }

    set agencia(novaAgencia) {

        if (novaAgencia != 0) {
            this._agencia = novaAgencia
        }
    }
    get agencia() {
        return this._agencia
    }

    set cliente(novoValor) {

        if (novoValor instanceof Cliente) {
            this._cliente = novoValor
        }
    }


    get cliente() {
        return this._cliente
    }

//método abstrato
    sacar(valor) {
        throw new Error("O método sacar da conta é abstrato")
    }

    _sacar(valor, taxa) {
        const valorSacado = taxa * valor

        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return valorSacado
        }
        return 0
    }

    get saldo() {

        return this._saldo

    }

    depositar(valor) {

        if (valor < 0) {
            return;
        }
        this._saldo += valor;
    }

    transferir(valor, conta) {

        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado)
    }

}