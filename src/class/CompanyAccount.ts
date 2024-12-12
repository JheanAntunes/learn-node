import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }
  getLoan = () => {
    console.log("vc pegou um emprestimo");
  };

  deposit = () => {
    console.log("A empresa depositou");
  };
}
