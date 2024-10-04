export class User {
    constructor(
      public tituloEleitor: string,
      public cpf: string,
      public nome: string,
      public mae: string,
      public pai: string,
      public nascimento: Date
    ) {}
  }