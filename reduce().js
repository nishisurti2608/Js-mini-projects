const rainJanuaryByWeek = [10, 20, 0, 122];

const totalRainfallJanuary = rainJanuaryByWeek.reduce(function (
  total,
  currentElement
) {
  console.log("total: " + total, "currentElement: " + currentElement);
  return total + currentElement;
});

console.log(totalRainfallJanuary);

//elemaneting duplicates or find recent dates

function calculateClassAverage(studentsArr) {
    const totalGrades = studentsArr.reduce(function(total, currentStudent){
        return total + currentStudent.grade
    }, 0)
}

// 0 extra parameter at the end total is 1st element of aray which is object
// here we are forcing starting value to be 0 so you can access first object

