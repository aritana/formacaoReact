/* import { Cliente } from "../js-orientacaoObjetos/Cliente.js";
import { ContaCorrente } from "../js-orientacaoObjetos/ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";
import{Conta} from "./Conta.js" */

/* console.log("teste")

const cliente1 = new Cliente("Ricardo", 111111);

const contaPoupanca = new ContaPoupanca(10,cliente1, 1001)

contaPoupanca.depositar(140);
contaPoupanca.sacar(50);

const contaCorrente1 = new ContaCorrente(cliente1, 1001)
contaCorrente1.depositar(140);
let valor = contaCorrente1.sacar(50);

console.log(cliente1)
console.log(contaPoupanca)
console.log(contaCorrente1)
console.log(Conta.numeroDeContas)

console.log(valor) */

class Conta {
  constructor(titular, numero) {
    this.titular = titular;
    this.numero = numero;
    this._saldo = 0;
  }
}

class ContaCorrente extends Conta {
  constructor(titular, numero) {
    super(titular, numero);
  }
}

const conta = new ContaCorrente("Andre", 1245);
console.log(conta.saldo)