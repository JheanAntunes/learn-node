// Programação Orientada a Objetos é um paradigma de programação baseado no conceito de objestos, que conter dados na forma atributos e codigo, na forma de procedimentos, como métodos.

// this obter propriedades e methods da classe ou objeto

// export const user: {
//   name: string;
//   age: number;
//   getName: () => string | number;
// } = {
//   name: "Jhean",
//   age: 21,
//   getName: () => user.name,
// };

class User {
  name = "";
  age = 0;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  getName = () => {
    console.log(this.name);
  };
}

export const newUser = new User("jhean", 21);
