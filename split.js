var split = function(a) {
  return function(b) {
    var result;
    if(a==undefined){
      result= b.split(" ");
    }else {
      result= b.split(a);
  }
    return result;
  };
};