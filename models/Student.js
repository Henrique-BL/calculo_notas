class Student {
    #id;
    #name;
    #p1;
    #p2;
    #p3;
    #missedClasses;
    #mean;
    #status;
    #finalGrade;
  
    constructor(id, name, p1, p2, p3, missedClasses) {
      this.#id = id;
      this.#name = name;
      this.#p1 = p1;
      this.#p2 = p2;
      this.#p3 = p3;
      this.#missedClasses = missedClasses;
      this.#mean = this.calculateMean();
      this.#finalGrade = 0;
      this.#status = this.calculateStatus();
    }
  
    calculateMean() {
      // Calculate the mean grade based on the average of p1, p2, and p3
      return (this.#p1 + this.#p2 + this.#p3) / 3;
    }
  
    calculateStatus() {
      // Set the status based on the mean grade and the number of missed classes
      if(this.#missedClasses > 0.25 * 60){
        return 'Reprovado por Falta';
      }
      if(this.#mean < 5 ) {
        return 'Reprovado por Nota';
      }
      if(this.#mean >= 5 &&  this.#mean < 7){
        this.#finalGrade = this.calculateFinalGrade();
        return "Exame Final";

      }
      if (this.#mean >= 7) {
        return 'Aprovado';
      }


    }
    //Calculate the final grade (naf) using the simplified formula 5 <= (mean + naf)/2 
    calculateFinalGrade(){
        
        return 10 - this.#mean;

    }
  
    // Getters for private properties
    get id() {
      return this.#id;
    }
  
    get name() {
      return this.#name;
    }
  
    get p1() {
      return this.#p1;
    }
  
    get p2() {
      return this.#p2;
    }
  
    get p3() {
      return this.#p3;
    }
  
    get missedClasses() {
      return this.#missedClasses;
    }
  
    get mean() {
      return this.#mean;
    }
  
    get status() {
      return this.#status;
    }  
    get finalGrade() {
      return this.#finalGrade;
    }
  }
  
 
module.exports = Student;