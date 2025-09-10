interface Student {
  firstName: string;
  lastName: string;
    age: number;
    location: string;
    }   
  
const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "New York"
};
  
const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "Los Angeles"
};
    
    const studentsList: Student[] = [student1, student2];
    
    console.log(studentsList);

    export {};
// Assuming you want to log the students in a table format
console.table(studentsList);