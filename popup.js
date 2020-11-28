document.addEventListener("DOMContentLoaded",()=>{
    document.querySelector('button').addEventListener('click',onclick,false);
    function onclick(){
        chrome.tabs.query({active:true,currentWindow: true},(tabs)=>{
            chrome.tabs.sendMessage(tabs[0].id,"start",function respond(handleResp){
                if (sessionStorage.getItem("contentLoaded")==="true"){
                    document.getElementById("url").innerHTML="http://localhost:3001/fig.jpg"
                }else{
                    respond();
                }
            })
        })
    }
})