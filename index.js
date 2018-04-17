function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
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
  var begin = document.getElementById('app').querySelector('#grand-node')
  var store = []
  for(var i = 0; i < begin.length; i++) {
    store.push(begin[i].innerHTML)
  } return store
}