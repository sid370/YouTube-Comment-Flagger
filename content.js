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
    "https://api.dandelion.eu/datatxt/sent/v1/?lang=en&text="+text+"&token=${{secrets.KEYID}}";
  console.log(url)
  fetch(url)
    .then((res) => res.json())
    .then((resp) => {
        response=resp
      alert(resp.sentiment.type);
    });
    console.log(response)
  resp({ list: list });
});
