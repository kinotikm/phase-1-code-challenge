//define a function called calculateGrade
function calculateGade(score){
    //check if score is greater than 79
  
    if (score > 79){
        return'A';
        //if its greater ,return 'A'
    }
    //if score is not greterthan 79 ,will check between 60and 79
    else if (score >= 60 && score <= 79){
        return'B';
        //if true return 'B'
    }
    //if score is ! between 60 &&& 79 ,it checks if score is between 50 and 59(inclusive)
    else if (score >= 50 && score <= 59){
        return'C';
        //if true it returns 'c'
    }
    //if score is !between 50 and 59 it checks 40 and 59 (inclusive)
    else if (grade >= 40 && score <=49){
        return'D';
    }
    else{
        return'E';
    
    }
    }
    //define a variable called score then assign a value 79
    score =79
    console.log(`The Student Grade Is:`,calculateGade(score));