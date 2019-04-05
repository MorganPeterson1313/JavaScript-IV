// CODE here for your Lambda Classes
class Person {
    constructor(attributes){
        this.name = attributes.name;
        this.age = attributes.age;
        this.gender = attributes.gender;
        this.location = attributes.location;
    }

    speak(){
     return   `Hello my name is ${this.name}, I am from ${this.location}.`
    }
}

class Instructor extends Person{
    constructor(attributes){
        super(attributes);
 this.specialty = attributes.specialty;
 this.favLanguage = attributes.favLanguage;
 this.catchphrase =attributes.catchprase;

    }

    demo(subject){
   `Today we are learning about ${this.subject}`
    }
    grade(student, subject){
return `${student.name} recieves a perfect score on ${subject}`
    }
}

class Student extends Instructor {
    constructor(attributes){
        super(attributes);
this.previousBackground = attributes.previousBackground;
this.className = attributes.className;
this.favSubjects = attributes.favSubjects;
 }

 listsSubjects(){
     return `My favorite subjects are ${this.favSubjects}.`

 }
PRAssignment(subject){
return `${student.name} has submitted s PR for ${subject}`;
    }
    sprintChallenge(subject){
        return `${student.name} has beugun sprint challenge on ${subject}`
    }
}

class ProjectManagers extends Student{
    constructor(attributes){
        super(attributes);
        this.gradClassName = attributes.gradClassName;
        this.favInstructor = attributes.favInstructor;
    }

standUp(channel) {
return `${projectManager.name} announces to ${channel}, @channel standy times!`;
}

debugsCode(student, subject){
return `${this.name} debugs ${student.name}'s code on ${subject}.`
    }
}


const fred = new Person({
    name: 'Fred',
    age: 37,
    location: 'Bedrock'
  });

const instructor = new Instructor({
    name: 'Cam',
    location: 'LA',
    age: 31,
    gender: 'male',
    favLanguage: 'Java',
    specialty: 'Front-end',
    catchPhrase: `That's Dope!`
  });
  
  const student = new Student ({
    name: 'Morgan',
    age: 34,
    location: 'NewYork',
    previousBackground: 'I am an artist who loves acrylic paint',
    className: 'JavaScript',
    favSubjects: ['Proofs','LinearAlgebra' ,'Accounting' , 'businessMarketing'],

  });

  const projectManager = new ProjectManagers ({
    name: 'Nate',
    location: 'LA',
    age: 29,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'React',
    catchPhrase: `Catch you on the flip side!`,
    gradClassName: 'Web15',
    favInstructor: 'Cam',
  });



console.log(student.name);
console.log(projectManager.debugsCode(student, 'Proofs'));
console.log(student);
console.log(student.listsSubjects());

