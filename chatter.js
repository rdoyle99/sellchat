window.onload = function() {
  const queryString = window.location.search;
  var title = document.getElementById("title")
  title.innerHTML = queryString
}

const queryString = window.location.search;
const link = queryString.substr(1)
alert(link);
