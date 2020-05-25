document.addEventListener('click', dropdown);
function dropdown(e) {
  if(e.target.matches('.dropdown-item')){
    var temp = e.target.innerHTML;
    var current = e.target.parentNode.parentNode.querySelector('p').innerHTML;
    e.target.parentNode.parentNode.querySelector('p').innerHTML = temp;
    e.target.innerHTML = current;
  }
}
