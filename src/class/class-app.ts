import { CompanyAccount } from "./CompanyAccount";
import { PeopleAccount } from "./PeopleAccount";

const companyAccount = new CompanyAccount("jheanEmprestimo", 1);

console.log(companyAccount);

const peopleAccount = new PeopleAccount("jhean", 10, 1);

console.log(peopleAccount);

// herança conceito: herdar propriedades e methods de uma classe existente. Podendo passar argumentos para o construtor da classe na instancia com o method super para reutilizar a class.

// poliformismo rescrever um method existete ou alterar o fluxo.
