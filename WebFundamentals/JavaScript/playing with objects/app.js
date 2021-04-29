// var users = [{name: "Michael", age:37}, {name: "John", age:30}, {name: "David", age:27}];
var users = [
    {
        name: "Michael",
        age: 37
    },
    {
        name: "John",
        age: 30
    },
    {
        name: "David",
        age: 27
    }
];

console.log(users[1].age);//John's age

console.log(users[0].name);//The name of the first object

for (var i = 0; i < users.length; i++){
    console.log(users[i].name+ " - "+ users[i].age);//print name and age of each user
}