var endpoint = "https://api.npoint.io/430fb8e5603a4215c50a"



function geturl() {
  var url = document.getElementById(“urlinput”).value;
  var protocol_ok = url.startsWith(`“http://”`) || url.startsWith(`“https://”`) || url.startsWith(`“ftp://”`);
    if(!protocol_ok){
      newurl = `“http://”`+url;
      return newurl;
      console.log('geturl if 1')
    } else {
      return url;
      console.log('geturl else 2')
    }
}

function getrandom() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
    console.log('getrandom 3')
}

function genhash() {
  if (window.location.hash == “”) {
     window.location.hash = getrandom();
     console.log('genhash 4')
  }
}

function send_request(url) {
  this.url = url;
    $.ajax({
      ‘url’: endpoint + “/” + window.location.hash.substr(1),
      ‘type’: ‘POST’,
      ‘data’: JSON.stringify(this.url),
      ‘dataType’: ‘json’,
      ‘contentType’: ‘application/json; charset=utf-8’
    })
    console.log('send rq)
}

function shorturl() {
  var longurl = geturl();
  genhash();
  send_request(longurl);
  console.log('short 5')
}

var hashh = window.location.hash.substr(1)

if (window.location.hash != "") {
  $.getJSON(endpoint + "/" + hashh, function (data) {
    data = data["result"];
    console.log('data result 6')
    if (data != null) {
      window.location.href = data;
      console.log('data null 7')
    }

  });
}
