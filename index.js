function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget(selector1, selector2) {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  //Select elements
  var ranked = document.getElementById('app').querySelectorAll('.ranked-list li')
  for(var i = 0; i < ranked.length; i++) {
    //Iterate through elements to grab their innerHTML, add int values
    ranked[i].innerHTML = parseInt(ranked[i].innerHTML) + parseInt(n)
  }
}

function deepestChild(id, element) {
  /*var begin = document.getElementById('grand-node')
  var store = []
  for(var i = 0; i < begin.length; i++) {
    begin[i].innerHTML
  }*/
  var nodes = document.querySelectorAll(`#${id} ${element}`);
  if(!nodes.length){ return false;}
  return nodes[nodes.length-1];
}