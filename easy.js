const exercise = function(promoted) {
let exercise = promoted;

return function() {
    console.log(`Today's exercise: ${exercise}`);
  }
}
const todaysExercise = exercise('skating');

todaysExercise();