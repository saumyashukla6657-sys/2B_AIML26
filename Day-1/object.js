let student = {
    first: "Saumya",
    last: "Shukla", 
    city: "Ghaziabad",
    pin: 201001,
    salary: function() {
        console.log("Salary");
    },
subject: ["Maths", "Science", "English"]
}
  console.log(student.first);   
  console.log(student.last);
  student.salary(50000);
  student.subject[0]; 

/*  let student = new Object();
  student.first = "Saumya";
  student.last = "Shukla";  
  student.city = "Ghaziabad";
  student.pin = 201001;
  student.salary = function() {
    console.log("Salary");
  };
  student.subject = ["Maths", "Science", "English"];*/