window.onload = function() {
  const queryString = window.location.search;
  const link = queryString.substr(1)
  const frame = document.getElementById("contentFrame")
  frame.src = link
}
