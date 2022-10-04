var person = {
  firstName: 'Miori',
  lastName: 'Imai',
  hobby: 'Shopping'
};

console.log(person);

var fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is:", fullName);

person.job = 'University student';
console.log("The person's job is", person.job);

person.previousJob = 'High school student';
console.log("The person's previous job is:", person.previousJob);

console.log(person);
