export abstract class DioAccount {
  private name: string = "";
  private readonly accountNumber: number = 0;
  private balance: number = 0;
  private status: boolean = true;
  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  setName = (name: string) => (this.name = name);

  getName = () => this.name;

  deposit = () => {
    if (this.validateStatus()) {
      console.log("Depositado");
    }
  };

  withdraw = () => {
    console.log("Sacou ");
  };

  getBalance = () => console.log("balance: ", this.balance);

  private validateStatus = () => {
    if (!this.status) throw new Error();
    return this.status;
  };
}
