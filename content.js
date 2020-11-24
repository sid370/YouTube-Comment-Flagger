//alert("only for google")
//var list=document.querySelectorAll('.style-scope ytd-comment-renderer')
//console.log(list)

chrome.runtime.onMessage.addListener((req, sender, resp) => {
  var list = document.querySelectorAll(".style-scope ytd-comment-renderer");
  var text = "";
  for (i = 0; i < list.length; i++) {
    text += list[i].innerText;
  }
  text=text.replace(/[^0-9a-zA-Z]/gi, '')
  text=text.replace(/(\r\n|\n|\r)/gm,"")
  text=text.replace(/\s+/g, '')
  var response=""
  var url =
<<<<<<< HEAD
    "https://api.dandelion.eu/datatxt/sent/v1/?lang=en&text="+text+"&token=00912accafac40acafcf5693e9b5f3bf";
=======
    "https://api.dandelion.eu/datatxt/sent/v1/?lang=en&text="+text+"&token=${{secrets.KEYID}}";
  console.log(url)
>>>>>>> f5b3690b3b5cd695da7646816f2c0475e125c206
  fetch(url)
    .then((res) => res.json())
    .then((resp) => {
        response=resp
      alert(resp.sentiment.type);
    });
  resp({ list: list });
});
