document.addEventListener("DOMContentLoaded",()=>{
    document.querySelector('button').addEventListener('click',onclick,false);
    function onclick(){
        chrome.tabs.query({active:true,currentWindow: true},(tabs)=>{
            chrome.tabs.sendMessage(tabs[0].id,"start",handleResp)
        })
    }
    function handleResp(){
        var x = document.createElement("IMG");
        x.setAttribute("src", "./semantic_analysis/fig.jpg");
        x.setAttribute("width", "304");
        x.setAttribute("height", "228");
        x.setAttribute("alt", "Semantic Chart");
        document.body.appendChild(x);
    }
})