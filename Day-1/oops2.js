class student{
    constructor(roll, name,year){
        this.rollNumber=roll;
        this.name=name;
        this.year=year;
        console.log(this.rollNumber);
        console.log(this.name);
        console.log(this.year);
    }
}
let s1 = new student();
let s2 = new student(101, "Saumya", "2006");
let s3 = new student(102, "Shreyansh", "2007");
