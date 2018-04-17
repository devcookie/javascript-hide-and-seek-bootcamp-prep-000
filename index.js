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
  //Search for all div elements from grand-node ID & store in variable
  var child = document.getElementById('grand-node').querySelectorAll('div')
  //Select for child at the end of the list
  return child[child.length-1]
}