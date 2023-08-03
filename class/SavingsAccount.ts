import { DioAccount } from "./DioAccount"

export class SavingsAccount extends DioAccount {
    constructor(name: string, accountNumber: number) {
        super(name, accountNumber)
    }

    deposit = (valor: number): void => {
        if (this.validateStatus()) {
            this.balance = this.balance + (valor + 10);
            console.log(`Voce depositou R$${valor}`)
        }
    }
}