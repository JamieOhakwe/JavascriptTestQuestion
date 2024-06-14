class Invoice {
    client: string;
    details: string;
    amount: number;

    constructor(c: string, d: string, a: number){
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format(){
        return `${this.client} owes me $${this.amount} for ${this.details}`
    }
}
const invOne = new Invoice('Jamie', 'car maintenance', 200);
const invTwo = new Invoice('Chigozie', 'business expenses', 5048000);

const invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach((inv)=>{
    console.log(inv.format());
    
})
console.log(invoices);