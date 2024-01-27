// Import the Student class and auxilary functions
const Student = require('./models/Student.js');
const Library = require('./Library.js');
const prompt = require("prompt-sync")({ sigint: true });

// Main function
function main() {
    // Call the function to create a Stud1ent object from user input
    console.log("\n*** Starting Grade System ***\n");
    console.log("*** Attention: ***\n");
    console.log("- Use a dot (.) when entering a grade, for example, if it's 58, enter 5.8\n");
    console.log("- In ID, enter the student's registration number\n");
    console.log("- Enter the data correctly in the numeric value fields\n");

    option = 0;
    while(option !=2){
        console.log("\n---------------------")
        let studentFromUserInput = Library.createStudentFromUserInput();
        Library.displayStudentData(studentFromUserInput);

        let option = parseInt(prompt('Exist System?\n 1 - Yes  2 - No\n'));
        if(option === 1){
            break;
        }
    }
}

// Call the main function to execute the program
main();
