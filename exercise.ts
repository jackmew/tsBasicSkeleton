type TBankAccount = { money: number; deposit: (value: number) => void };
let bankAccount: TBankAccount = {
  money: 2000,
  deposit(value: number) {
    this.money += value;
  }
};
let myself: { name: string; bankAccount: TBankAccount; hobbies: string[] } = {
  name: "Max",
  bankAccount: bankAccount,
  hobbies: ["Sports", "Cooking"]
};

myself.bankAccount.deposit(3000);
console.log(myself);
