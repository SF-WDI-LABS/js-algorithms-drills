function pascal(n) {
  var result = [];
  result[0] = [1];
  result[1] = [1, 1];
  for (var row = 2; row < n; row++) {
    result[row] = [1];
    for (var col = 1; col <= row - 1; col++) {
      result[row][col] = result[row - 1][col] + result[row - 1][col - 1];
      result[row].push(1);
    }
  }
  return result;
}

//helper to display meaninful result
function printPascal(n) {
  for (var i = 0; i < pascal(n).length; i++){
    document.write(pascal(n)[i]+"<br>");
    console.log(pascal(n)[i]+"<br>");
  }
}
