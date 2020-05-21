window.onload = function() {
  const queryString = window.location.search;
  var title = document.getElementById("title")
  title.innerHTML = queryString
  const link = queryString.substr(1)
  const frame = document.getElementById("contentFrame")
  frame.src = link
}
