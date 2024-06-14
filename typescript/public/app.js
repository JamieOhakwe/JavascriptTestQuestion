"use strict";
class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.client} owes me $${this.amount} for ${this.details}`;
    }
}
const invOne = new Invoice('Jamie', 'car maintenance', 200);
const invTwo = new Invoice('Chigozie', 'business expenses', 5048000);
const invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach((inv) => {
    console.log(inv.format());
});
console.log(invoices);
