function calc(){
  var i;
  var resultat=0;
  for (i = 0; i < arguments.length; i++) {
    resultat+=arguments[i];
  }
  return resultat;
}
alert(calc(8, -1));