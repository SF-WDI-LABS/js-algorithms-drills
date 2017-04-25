function distanceBetweenCircles(circle1, circle2) {

}


var circle1 = {
  center : {
    x: 3,
    y: 4
  },
  radius: 2
};

var circle2 = {
  center : {
    x: 14,
    y: 11,
  },
  radius: 8
};

var circle3 = {
  center: {
    x:2,
    y:2,
  },
  radius: 5
};

console.log(distanceBetweenCircles(circle1, circle2));//should be 3.0384048104052983
console.log(distanceBetweenCircles(circle1, circle3)); //should be 0
console.log(distanceBetweenCircles(circle2, circle3));//should be 2
