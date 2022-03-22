import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

console.log("teste")

const cliente1 = new Cliente("Ricardo", 111111);

const contaCorrente1 = new ContaCorrente(cliente1, 1001)

contaCorrente1.depositar(150);
contaCorrente1.sacar(50);

console.log(cliente1)
console.log(contaCorrente1)

const contaCorrente2 = new ContaCorrente(cliente1, 1005)
contaCorrente2.depositar(1);

console.log(contaCorrente2)

contaCorrente1.transferir(50, contaCorrente2);

console.log(contaCorrente1.saldo);
console.log(contaCorrente2.saldo);
console.log(ContaCorrente.numeroDeContas);

