document.addEventListener("DOMContentLoaded",()=>{
    document.querySelector('button').addEventListener('click',onclick,false);
    function onclick(){
        chrome.tabs.query({active:true,currentWindow: true},(tabs)=>{
            chrome.tabs.sendMessage(tabs[0].id,"start",handleResp)
        })
    }
    function handleResp(){
        console.log(handleResp)
    }
})