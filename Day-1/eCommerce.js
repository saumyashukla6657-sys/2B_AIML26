class Product {
    constructor(productId, productName, price) {
        this.productId = productId;
        this.productName = productName;
        this.price = price;
    }

    getDiscountedPrice(discount) {
        return this.price - (this.price * discount / 100);
    }

    static compareProducts(p1, p2) {
        if (p1.price > p2.price)
            console.log("Higher Price Product:", p1.productName);
        else
            console.log("Higher Price Product:", p2.productName);
    }

    display() {
        console.log("ID:", this.productId);
        console.log("Name:", this.productName);
        console.log("Price:", this.price);
    }
}

class Electronics extends Product {
    constructor(id, name, price, warranty) {
        super(id, name, price);
        this.warranty = warranty;
    }

    display() {
        super.display();
        console.log("Warranty:", this.warranty, "years");
    }
}

let p1 = new Product(101, "Shoes", 2000);
let p2 = new Product(102, "Bag", 1500);

console.log("Discounted Price:", p1.getDiscountedPrice(10));

Product.compareProducts(p1, p2);

let e1 = new Electronics(103, "Laptop", 60000, 2);

console.log("\nElectronics Details:");
e1.display();
