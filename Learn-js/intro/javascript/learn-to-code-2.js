// OBJECTS

console.log("----------OBJECTS---------")

// var to create obj
var student_obj = {
    first_name: "Ro",
    last_name: "in"
};
console.log(`student_obj data: Name => ${student_obj.first_name}`)

// function to create obj
console.log("========FNC to create obj==========")
function student(first, last, age){
    this.first_name = first;
    this.last_name = last;
    this.age = age;
    this.greeting  = function() {
        return `Hi, I'm ${this.first_name} and I'm ${this.age} years old`
    }
}

student("ro","inzu",31)
var s1 = new student("ro","inzu",31)
console.log(s1)
// -------------------------------------------------------------

// classes
console.log("=========Classes to create obj============")
class Student {
    constructor(first, last, age) {
        this.first_name = first;
        this.last_name = last;
        this.age = age;
    }

    greeting(){
        return `Hi, I'm ${this.first_name} and I'm ${this.age} years old`;
    }
}

new_student =  new Student("Juana","Granados",26)
new_student1 =  new Student("RO","Inzu",31)
new_student2 =  new Student("Ye","West",40)


// students array
students = new Array()
students.push(new_student)
students.push(new_student1)
students.push(new_student2)

for(var i = 0; i < students.length; i++){
    console.log(students[i].greeting());
}
console.log("Iterate through object with key and val")
// iterate through objects keys and values
for (var key in students){
    console.log(students[key]);
}