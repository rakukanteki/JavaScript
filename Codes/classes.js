// Class: provides a more structured and cleaner way to work with object
//        compared to traditional ways.

//Creating class.
class Product
{
    constructor(name, price)
    {
        this.name = name;
        this.price = price;
    }

    displayProduct()
    {
        console.log(`Product: ${this.name}`);
        console.log(`Price: $${this.price.toFixed(2)}`);
    }

    calculateTotal(salesTax)
    {
        return this.price + (this.price * salesTax);
    }
}

const product1 = new Product("Shirt", 19.99);
const product2 = new Product("Pants", 22.50);
const product3 = new Product("Underwear", 100.50);

product1.displayProduct();
product2.displayProduct();
product3.displayProduct();

const salesTax = 0.06;
const total = product1.calculateTotal(salesTax);
console.log(`Total price of ${product1.name}(including VAT): $${total.toFixed(2)}`);