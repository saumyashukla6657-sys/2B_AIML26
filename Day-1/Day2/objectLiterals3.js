let F = "firstName"
let L = "lastName"
let data = {
    [F]: "Saumya",
    [L]: "Shukla"

};
data.show = function() {
    console.log(this.firstName);
    console.log(this.lastName);
   }

console.log(data.show());
