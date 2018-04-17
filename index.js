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

function deepestChild() {
  /*var begin = document.getElementById('grand-node')
  var store = []
  for(var i = 0; i < begin.length; i++) {
    begin[i].innerHTML
  }*/
  var target = $('#grand-node').children(),
    var next = target;

while( next.length ) {
  target = next;
  next = next.children();
} return  target.attr('id')
}