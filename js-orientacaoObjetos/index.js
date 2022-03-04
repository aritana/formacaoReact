import{Cliente} from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";


const cliente1 = new Cliente();
cliente1.nome = "Ricardo"
cliente1.cpf = 111111


const contaCorrente1 = new ContaCorrente()
contaCorrente1.agencia = 1001;
contaCorrente1.cliente = cliente1;


contaCorrente1.depositar(150);
contaCorrente1.sacar(50);


console.log(cliente1)
console.log(contaCorrente1)


const contaCorrente2 = new ContaCorrente()
contaCorrente2.agencia = 1005;
contaCorrente2.cliente = cliente1;
contaCorrente2.depositar(1);

console.log(contaCorrente2)

contaCorrente1.transferir(50,contaCorrente2);

console.log(contaCorrente1.informarSaldo());
console.log(contaCorrente2.informarSaldo());