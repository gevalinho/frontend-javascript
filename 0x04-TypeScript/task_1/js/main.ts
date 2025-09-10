  

 interface Teacher {
  readonly firstName: string;           // Set initially, then immutable
  readonly lastName: string;            // Set initially, then immutable
  fullTimeEmployee: boolean;            // Always required
  yearsOfExperience?: number;           // Optional
  location: string;                     // Always required
  [key: string]: any;                   // Accepts arbitrary extra properties
}

const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false,  // Additional property—allowed by the index signature
};

console.log(teacher3);


  

    
    
