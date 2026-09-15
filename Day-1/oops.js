// class Hello {
//     constructor () {
//         console.log("Hello World");
//         console.log("Hello World");
//         console.log("Hello World");
//     }
// }   
// let obj = new Hello();
// let h1 = new Hello();
// let h2 = new Hello();
class Hello {
    faculty = "Shreyansh";
    constructor(name) {
        
        this.empName = name;
        console.log(this.empName);
    }
}
let h= new Hello();
console.log(h.faculty);
