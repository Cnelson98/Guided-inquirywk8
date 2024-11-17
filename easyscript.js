const exercise = function(jog) {
    let exerciseDay = 'jog';
    return  function() {
        console.log(`exercise of the day: ${exerciseDay}`);
    }
}
const exerciseOfTheWeek = exercise('jog')
exerciseOfTheWeek()