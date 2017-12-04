var currentGrade;
function onLoad(){
    calculateGrade();
}

function calculateGrade(){
    var totalWeight = parseInt(document.getElementById("homeworkWeight").value) + parseInt(document.getElementById("classworkWeight").value) + parseInt(document.getElementById("assessmentWeight").value) + parseInt(document.getElementById("participationWeight").value);
    document.getElementById("totalWeight").innerHTML = totalWeight + "%";
    var homeworkAverage = calculateCatGrade("homework");
    var classworkAverage = calculateCatGrade("classwork");
    var assessmentAverage = calculateCatGrade("assessment");
    var participationAverage = calculateCatGrade("participation");
    var homeworkTotal = calculateWeight(homeworkAverage, "homework");
    var classworkTotal = calculateWeight(classworkAverage, "classwork");
    var assessmentTotal = calculateWeight(assessmentAverage, "assessment");
    var participationTotal = calculateWeight(participationAverage, "participation");
    currentGrade = homeworkTotal + classworkTotal + assessmentTotal + participationTotal;
    console.log(currentGrade.toString().slice(0,5));
    document.getElementById("weightedGrade").innerHTML = currentGrade.toString().slice(0,4) + "%";
}

function calculateFinal(){
    var finalWeight = parseInt(document.getElementById("finalWeight").value);
    var finalDesired = parseInt(document.getElementById("final").value);
    var currentWeight = 1 - (finalWeight/100);
    var weightedCurrent = currentGrade * currentWeight;
    var finalGradeRequired = (finalDesired - weightedCurrent) / (finalWeight/100);
    document.getElementById("finalCalc").style.marginBottom = "0px";
    document.getElementById("gradeRequired").innerHTML = finalGradeRequired.toString().slice(0,5) + "% required to get a " + finalDesired;
    console.log(finalGradeRequired);

}


function calculateCatGrade(category){
    var points = document.getElementById(category).value;
    var scoresArray = points.split(",");
    var average = 0;
    for(var i = 0; i < scoresArray.length; i++){
        average += parseInt(scoresArray[i]);
    }

    average = average / scoresArray.length;
    return average;
}

function calculateWeight(average, category){
    var average;
    var weight = (document.getElementById(category + "Weight").value / 100);
    var total = average * weight;
    return total;
}




