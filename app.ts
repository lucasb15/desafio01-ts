import { CompanyAccount } from './class/CompanyAccount';
import { PeopleAccount } from './class/PeopleAccount';
import { SavingsAccount } from './class/SavingsAccount';

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Henrique', 10);
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20);
const savingsAccount: SavingsAccount = new SavingsAccount('Poupança', 30)

// Depósito

peopleAccount.deposit(100.50)
peopleAccount.getBalance();

companyAccount.deposit(250.00)
companyAccount.getBalance();

savingsAccount.deposit(100.00);
savingsAccount.getBalance();

// Saque

peopleAccount.withdraw(150) // Operação deve falhar
peopleAccount.getBalance();
peopleAccount.withdraw(80) // Deve retornar sucesso
peopleAccount.getBalance();

// Empréstimo
companyAccount.getLoan(500);
companyAccount.getBalance();