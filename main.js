function changeurl() {
  var form = document.getElementById("inputurl")
  var formValue = document.getElementById("inputurl").value;
  var outputValue = document.getElementById("outputurl")

  form.addEventListener("submit", handleSubmit())

  function handleSubmit() {
    console.log(formValue)
    outputValue.innerHTML = "https://upbeat-snyder-ac6958.netlify.app/view?" + formValue
    outputValue.innerHTML.href = "/view" + formValue
  }



}

const queryString = window.location.search;
var title = document.getElementById("title")
title.innerHTML = queryString
