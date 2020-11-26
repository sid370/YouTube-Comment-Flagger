const express=require("express")
const morgan = require("morgan")

const app=express()
app.use(morgan("dev"))

async function pData(data){
    console.log("in pData")
    const spawn = require("child_process").spawn
    var process = spawn('python3',["./main.py","siddhant"])
    process.stdout.on('data',(d)=>{
        return d
    })
}
app.get("/data/:text",(req,res)=>{
    const data=req.params.text
    retData=pData(data)
    res.status(200).json({
        message: retData
    })
    
    
    //process.stdout.on('data',(data)=>{
    //    res.status(200).json({
    //        sentiment:{
    //            type:data
    //        }
    //    })
    //})
})

app.get((req,res)=>{
    res.status(404).json({
        message: "not powered"
    })
})

app.listen(4000,()=>{
    console.log("server running")
})