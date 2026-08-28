class student {
    constructor(name, age, branch) {
        this.name = name;
        this.age = age;
        this.branch = branch;
    }
    display() {
        console.log(this.name);
        console.log(this.age);
        console.log(this.branch);
    }
}
let s1 = new student("Saumya", 22, "CSE");
let s2 = new student("Shukla", 23, "ECE");
let s3 = new student("Riya", 24, "ME");
s1.display();
s2.display();
s3.display();