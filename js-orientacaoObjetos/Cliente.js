export class Cliente {

//propriedades de instancias
//devem ser definidas dentro dos 
//metodos da classe

    constructor(nome, cpf) {
        this.nome = nome
        this._cpf = cpf
    }

    get cpf() {
        return this._cpf
    }

}
