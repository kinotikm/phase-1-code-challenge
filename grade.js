function calculateGade(score){
  
    if (score > 79){
        return'A';
    }
    else if (score >= 60 && score <= 79){
        return'B';
    }
    else if (score >= 50 && score <= 59){
        return'C';
    }
    else if (grade >= 40 && score <=49){
        return'D';
    }
    else{
        return'E';
    
    }
    }
    score =79
    console.log(`The Student Grade Is:`,calculateGade(score));