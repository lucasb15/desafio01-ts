export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  protected balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }

  deposit = (valor: number): void => {
    if(this.validateStatus()){
      this.balance = this.balance + valor;
      console.log(`Voce depositou R$${valor}`)
    }
  }

  withdraw = (valor: number): void => {
    if(this.validateStatus()){
      if(this.balance >= valor && (this.balance - valor) >= 0) {
        this.balance = this.balance - valor;
        console.log(`Voce sacou R$${valor}`)
      } else (
        console.log("Não tem saldo suficiente")
      )
    }
  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  protected validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }

  desabledAccount = (): void => {
    this.status = !(this.status)
  }
}