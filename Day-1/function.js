function student(name, age, branch) {
    this.name = name;
    this.age = age;
    this.branch = branch;


}   
let s1 = new student("Saumya", 22, "CSE");  
let s2 = new student("Shukla", 23, "ECE");
let s3 = new student("Riya", 24, "ME");


console.log(s1.name);
console.log(s2.age);    
console.log(s3.branch);