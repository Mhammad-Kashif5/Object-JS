/* Object: Is key-value pair */
let student = {
    name: "Kashif",
    age: 21,
    city: "Peshawar",
    country: "Pakistan"
}
console.log("Access full object", student);
// access key value of object
console.log(student.name);
console.log(student.age);
console.log(student.city);
console.log(student.country);

/*   Access key with the help of loop*/
for (let key in student) {
    console.log(key);
    console.log(student[key]);
}
// deleted value from obj
delete student.city;
console.log("Print full obj without city", student);
// for checking deleted key
let deleteKey = delete student.city;
console.log(deleteKey);
/* Nested Object: obj inside another obj */
let students = {
    name: "Basit",
    age: 20,
    marks: 705,
    address: {
        city: "Peshawar",
        country: "Pakistan"
    }
}
console.log(students.marks);
console.log(students.address);
console.log(students.address.city);
console.log(students.address.country);
/* Object with Array  */
let allStudents = [
    {
        name: "Kashif", age: 21, marks: [34, 56, 78, 98, 67], address: [{
            city: "Peshawar",
            country: "Pakistan"
        }]
    },
    {
        name: "basit", age: 21, marks: [34, 56, 78, 98, 67], address: [{
            city: "Karachi",
            country: "Pak"
        }]
    },
    {
        name: "Ahmad", age: 21, marks: [34, 56, 78, 98, 67], address: [{
            city: "Islamabad",
            country: "Pakistan"
        }]
    },
]
console.log("full Obj: ", allStudents);
console.log("First obj: ", allStudents[0]);
console.log("access city: ", allStudents[1].address[0].city);
console.log("access country: ", allStudents[2].address[0].country);

/* Tasks on Object */
// Beginner Level
/* Task No 1:   Create an object student with name, age, and course. Print each property. */
let std = {
    name: "Kashif",
    age: 21,
    course: "MERN-Stack"
}
console.log("full obj", std);
console.log(`Name: ${std.name} Age: ${std.age} Course: ${std.course}`);

/* Task No 2:  Update Object Properties */
std.name = "Ahmad", std.age = 20, std.course = "Full-Stack"
console.log("Full Obj", std);

console.log(`Name: ${std.name} Age: ${std.age} Course: ${std.course}`);

/* Task No 3: Create a product object with name and price. Add a brand property. */
let product = {
    name: "Perfume",
    price: "1200"
}
product.brand = "Zam Zam"
console.log(product);
/* Task No 4: Create a car object with brand, model, and color. Delete the color. */
let car = {
    name: "Corolla",
    model: 2025,
    color: "White"
}
let deletedColor = delete car.color
console.log(car);
/* Task No 5: Create a student object with name and marks. Check whether marks exists. */
let studentObj = {
    name: "Kashif",
    marks: 911,
}
for (let student in studentObj.marks) {
    console.log(student);
}
// Intermediate Level
/* Task No 6: Create a student object containing an array of five subject marks. Calculate the total. */
let studentMarks = {
    name: "Kashif",
    marks: [34, 56, 78, 90, 67]
}
let total = 0
for (let mark of studentMarks.marks) {
    total += mark;
}
console.log(total);

/* Task No 7: Create an object containing a student's name and an array of marks. Find the highest mark. */
let studentsMarks = {
    name: "Kashif",
    marks: [45, 67, 89, 67, 44]
}
console.log(Math.max(...studentsMarks.marks));
/* Task No 8:  Create a product object with name, price, and quantity. Calculate the total price.*/
let products = {
    name: "Laptop",
    price: 1200,
    quantity: 2
}
console.log(`Total: ${products.price * products.quantity}`);

/* Task No 9: Create an employee object containing name, age and an address object with city and country. Print the city. */
let employee = {
    name: "Kashif",
    age: 21,
    address: {
        city: "Peshawar",
        country: "Pakistan"
    }
}
console.log(`City: ${employee.address.city}`);

/* Task No 10: Create a user object containing a nested profile object with 
username and email. Update the email. */
let user = {
    username: "Kashif",
    address: {
        email: "m.kashif1234@gmail.com"
    }
};
user.address.email = "46m.kashif@gmail.com";
console.log(user);

/* Real-World Level */
/* Task 11: Shopping Cart, calculate discount */
let carts = {
    name: "Iphone",
    price: 130000,
    quantity: 3
}
let totalPrice = carts.price * carts.quantity;
let discount = totalPrice * 10 / 100;
let finalPrice = totalPrice - discount
console.log(`Total Price: ${totalPrice}`);
console.log(`Discount: ${discount}`);
console.log(`Final Price: ${finalPrice}`);

/* Task No 12: Create an employee object with name, salary, and bonus. Calculate the total salary. */
let employees = {
    name: "Kashif",
    salary: 150000,
    bonus: 10000,
}
console.log(`Total Salary ${employees.salary + employees.bonus}`);

/* Task No 13: Create a student object with a name and marks. Determine whether the student passed or failed. Passing
marks are 50. */
let checkResult = [
    { name: "Kashif", marks: 89 },
    { name: "Basit", marks: 40 },
    { name: "Abid", marks: 79 },
]
for (let student of checkResult) {
    if (student.marks >= 50) {
        console.log("Pass!");
    } else {
        console.log("Fail!");
    }
}

/* Task No 14: Create a user object containing name, age, email, and isActive. Update the email, 
change isActive, and print the updated object. */

let checkUser = {
    name: "Kashif",
    age: 21,
    email: "46m.kashifkhan@gmail.com",
    isActive: true
}
checkUser.email = "kashifkhan3456@gmail.com";
checkUser.isActive = false;
console.log(checkUser);
/* Final Task 15:Create a bankAccount object with accountHolder and balance. Deposit 5,000
 into the account and update the balance.  */

let bankAccount = {
    accountHolder: "Kashif",
    balance: 10000
};

bankAccount.balance = bankAccount.balance + 5000;

console.log(bankAccount);
