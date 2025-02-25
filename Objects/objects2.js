//const tinderUser=new Object()  // singleton object
const tinderUser = {}; // non-singleton object

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;
console.log(tinderUser);

const regularUser = {
  email: "sammy@gamil.com",
  fullname: {
    userfullname: {
      fisrtname: "rahul",
      lastname: "Raj",
    },
  },
};

console.log(regularUser.fullname.userfullname.fisrtname);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj4 = { 5: "a", 6: "b" };

//const obj3={obj1,obj2}
//const obj3 = Object.assign({}, obj1, obj2, obj4); // {} :- target element //if we do not use then it all in obj1

const obj3 = { ...obj1, ...obj2 };
console.log(obj3);

const users = [
  {
    id: 1,
    emailID: "Rahul@gamil.com",
  },
];

//users[1].emailID;
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty("isLoggedIn")); // object exist or not

const course = {
  coursename: "Js in hindi",
  price: "999",
  courseInstructor: "Hitesh",
};

// course.courseInstructor;

const { courseInstructor: Instructor } = course;
console.log(Instructor);
