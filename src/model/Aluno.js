class Aluno {
    _nome;
    _nota;

    constructor(nome, nota) {
        this._nome = nome;
        this._nota = nota;
    }

    get nota() {
        return this._nota;
    }

    get nome() {
        return this._nome;
    }

    set nome(nome) {
        this._nome = nome;
    }

    set nota(nota) {
        this._nota = nota;
    }
}

export default Aluno;