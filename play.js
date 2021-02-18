var getRandomNumber = function (size) {         // random function 0 to size-1
    return Math.floor(Math.random() * size);
    };
var width = 400; //img size
var height = 400;
var clicks=0; //clicks counter
var target = {   //our treasure's coordinate
x: getRandomNumber(width),
y: getRandomNumber(height)
};

//  distance from our target
var getDistance = function (event, target) {
    var diffX = event.offsetX - target.x;  //event.offsetX is our click coordinate
    var diffY = event.offsetY - target.y;
    return Math.sqrt((diffX * diffX) + (diffY * diffY)); //PIFAGOR THEOREM
};
    // get an advice for founding
    var getDistanceHint = function (distance) {
    if (distance < 10) {
    return "Too hot";
    } else if (distance < 20) {
    return "Very hot";
    } else if (distance < 40) {
    return "Hot";
    } else if (distance < 80) {
    return "Warm";
    } else if (distance < 160) {
    return "Cold";
    } else if (distance < 320) {
    return "Very cold";
    } else {
    return "Too cold";
    }
    };


    // img click counter
$("#map").click(function (event) {
    clicks++;

    $("#coordinate").text("Coordinate x: "+event.offsetX +"px Coordinate y: "+ event.offsetY+"px");// our click coordinate
   
     var distance = getDistance(event, target);
     var distanceHint = getDistanceHint(distance);
    // JQuery  html change 
     $("#distance").text(distanceHint);
    // win
     if (distance < 8) {
         $("#heading").text("Good job!");
    alert("You found it! You did " + clicks+ " clicks");
    }
    });    