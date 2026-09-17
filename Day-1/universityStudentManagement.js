class Student {
     static count = 0;

    constructor(rollNumber, name, marks) {
        this.rollNumber = rollNumber;
        this.name = name;
        this.marks = marks;
        Student.count++;
    }
    display() {
        console.log("Roll Number: " , this.rollNumber);
        console.log("Name: " , this.name);
        console.log("Marks: " , this.marks);
    
    if(this.marks >= 40) {
        console.log("Student has passed");
    } else {
        console.log("Student has failed");
    } 
    console.log("*************************");
} 
    static displayCount() {
        console.log("Total number of students: " , Student.count);
    }
}
    let s1 = new Student(1, "John", 85);
    let s2 = new Student(2, "Jane", 35);
    let s3 = new Student(3, "Bob", 60);

    s1.display();
    s2.display();
    s3.display();
    Student.displayCount();