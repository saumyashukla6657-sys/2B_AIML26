class Student {
    display(roll, name, year) {
        this.rollNumber = roll;
        this.name = name;
        this.year = year;

        console.log("Roll Number:", this.rollNumber);
        console.log("Name:", this.name);
        console.log("Year:", this.year);
    }
}

let s = new Student();

s.display(101, "Saumya", 2);