function personID () {
   let PII = {
         name: "Calvin",
         ssn: 555555555
   }

   return {
    getName: function() {
        return PII.name;
    }

   }
}
const patient2 = createPatient();
console.log(patient2.getName());//calvin

console.log(patient2.ssn); 
