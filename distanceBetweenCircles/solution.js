  function distanceBetweenCircles(a,b) {
    let distanceBetweenCenters = Math.sqrt(Math.abs(Math.pow((a.center.x - b.center.x), 2) + Math.pow((a.center.y - b.center.y), 2)));
    let distanceBetweenEdges = distanceBetweenCenters - a.radius - b.radius;
    return distanceBetweenEdges < 0 ? 0 : distanceBetweenEdges;
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

