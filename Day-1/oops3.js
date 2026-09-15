class hello{
    constructor(){
       console.log("hello"); 
    }
}
class hi extends hello{
    constructor(){
        super();
        console.log("hi");
    }
}
let h1 = new hi();