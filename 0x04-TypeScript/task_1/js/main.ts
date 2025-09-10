interface Teacher {
  readonly firstName: string;   // Set initially, then immutable
  readonly lastName: string;    // Set initially, then immutable
  fullTimeEmployee: boolean;    // Always required
  yearsOfExperience?: number;   // Optional
  location: string;             // Always required
  [key: string]: any;           // Accepts arbitrary extra properties
}

const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false, // Allowed by the index signature
};

console.log(teacher3);

interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: true,
  location: 'London',
  numberOfReports: 17,
};

console.log(director1);
