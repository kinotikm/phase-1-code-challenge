//define a funnctioncalled calculateDemeritPoints with a parameter called speed
function calculateDemeritPoints(speed) {
    //define a constant variable called speed limit then set to 70
    const speedLimit = 70;
    //a variable known as demeritPoints and set it to 0
    let demeritPoints = 0;
//check if speed is less than or equal to speed limit
    if (speed <= speedLimit) {
        console.log("Ok");
        //if true .logs "ok"
    } else {
        //if speed exceeds speed limit ,calculate the demerits ponts
        demeritPoints = Math.floor((speed - speedLimit) / 5);
        //log the calculated demerits
        console.log(`Points: ${demeritPoints}`);
    }
    //check if demerits exceed 12

    if (demeritPoints > 12) {
        //if true driver's license will be suspended
        console.log("License suspended");
    }
    
      return demeritPoints;

}
    //Define a variable called speed and asign a value of 80

var speed =80;
calculateDemeritPoints(speed);
