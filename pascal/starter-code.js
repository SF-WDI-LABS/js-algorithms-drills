function pascal(n) {
}

//helper to display meaninful result
function printPascal(n) {
  for (var i = 0; i < pascal(n).length; i++){
    document.write(pascal(n)[i]+"<br>");
    console.log(pascal(n)[i]+"<br>");
  }
}
