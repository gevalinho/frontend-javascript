/// <reference path="./subjects/Teacher.ts" />
/// <reference path="./subjects/Subject.ts" />
/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/Java.ts" />
/// <reference path="./subjects/React.ts" />

// Create a teacher
const teacher: Subjects.Teacher = {
  firstName: "John",
  lastName: "Doe",
  experienceTeachingC: 5,
  experienceTeachingJava: 2,
  experienceTeachingReact: 0,
};

// Test Cpp
const cpp = new Subjects.Cpp();
cpp.setTeacher(teacher);
console.log(cpp.getRequirements());       // "Here is the list of requirements for Cpp"
console.log(cpp.getAvailableTeacher());  // "Available Teacher: John"

// Test Java
const java = new Subjects.Java();
java.setTeacher(teacher);
console.log(java.getRequirements());       // "Here is the list of requirements for Java"
console.log(java.getAvailableTeacher());  // "Available Teacher: John"

// Test React
const react = new Subjects.React();
react.setTeacher(teacher);
console.log(react.getRequirements());      // "Here is the list of requirements for React"
console.log(react.getAvailableTeacher()); // "No available teacher" (since experienceTeachingReact = 0)
