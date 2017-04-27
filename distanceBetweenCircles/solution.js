  function distanceBetweenCircles(a,b) {
    let distanceBetweenCenters = Math.sqrt(Math.abs(Math.pow((a.center.x - b.center.x), 2) + Math.pow((a.center.y - b.center.y), 2)));
    let distanceBetweenEdges = distanceBetweenCenters - a.radius - b.radius;
    return distanceBetweenEdges < 0 ? 0 : distanceBetweenEdges;
  }
