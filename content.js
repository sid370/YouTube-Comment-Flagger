chrome.runtime.onMessage.addListener((req, sender, resp) => {
  console.log("In content")
  var list = document.querySelectorAll("div[id='body'][class='style-scope ytd-comment-renderer']")
  list.forEach(async (each,i)=>{
    var ele = each
    if (ele.getAttribute("complete")!=="true"){
    text = ele.querySelector('yt-formatted-string[id="content-text"]').innerText
    text=text.replace(/[^0-9a-zA-Z ]/gi, '')
    text=text.replace(/(\r\n|\n|\r)/gm,"")
    await fetch ('http://localhost:3001/code/'+text)
    .then(res=>res.json())
    .then((res)=>{
      ele.querySelector('a[class="yt-simple-endpoint style-scope yt-formatted-string"]').innerHTML =  ele.querySelector('a[class="yt-simple-endpoint style-scope yt-formatted-string"]').innerHTML + `&emsp;<span style="font-size:15px; padding: 1px; border: 2px solid white;"><b>${res.message}</b></span>`
    })
    ele.setAttribute("complete","true")
  }
  })
  
  resp({ complete: true });
});


