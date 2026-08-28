class Product {

    constructor(productId, productName, price, quantity) {
        this.productId = productId;
        this.productName = productName;
        this.price = price;
        this.quantity = quantity;
    }

    // Method to calculate total price
    calculateTotalPrice() {
        return this.price * this.quantity;
    }

    // Method to update quantity
    updateQuantity(newQuantity) {
        this.quantity = newQuantity;
    }

    // Method to display product information
    display() {
        console.log("Product ID:", this.productId);
        console.log("Product Name:", this.productName);
        console.log("Price:", this.price);
        console.log("Quantity:", this.quantity);
        console.log("Total Price:", this.calculateTotalPrice());
    }
}

// Creating an object
let p1 = new Product(101, "Laptop", 50000, 2);

// Display product information
p1.display();

// Updating quantity
p1.updateQuantity(3);

// Display updated information
console.log("After updating quantity:");
p1.display();