// Import the Student class from the folder models
//Import the prompt module to get data from the user 
const Student = require('./models/Student')
const prompt = require("prompt-sync")({ sigint: true });

class Library {
  // Function to get user input and create and return a Student object
 static createStudentFromUserInput() {
    const id = parseInt(prompt('Enter student ID:'));
    const name = prompt('Enter student name:');
    const missedClasses = parseInt(prompt('Enter number of missed classes:'));
    const p1 = parseFloat(prompt('Enter score for P1:'));
    const p2 = parseFloat(prompt('Enter score for P2:'));
    const p3 = parseFloat(prompt('Enter score for P3:'));

    const student = new Student(id, name, p1, p2, p3, missedClasses);
    return student;

  }

  // Function to display student data
  static displayStudentData(student) {
    console.log('\nStudent Details:');
    console.log(`ID: ${student.id}`);
    console.log(`Name: ${student.name}`);
    console.log(`P1: ${student.p1}`);
    console.log(`P2: ${student.p2}`);
    console.log(`P3: ${student.p3}`);
    console.log(`Missed Classes: ${student.missedClasses}`);
    console.log(`Mean: ${student.mean}`);
    console.log(`Status: ${student.status}`);
    console.log(`Final Grade to be Approved: ${student.finalGrade}`);
  }
}
module.exports = Library;