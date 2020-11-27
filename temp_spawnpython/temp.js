const { spawn } = require("child_process")
const express = require("express")
const app = express()
const morgan = require("morgan")

app.use(morgan("dev"))
app.use(express.static(__dirname))

app.get("/code/:text",(req,res)=>{
    const data = req.params.text
    const spawn = require("child_process").spawn
    var process = spawn('python3',['./main.py',data])
    process.stdout.on('data',(data)=>{
        res.status(200).json({
            message : data.toString(),
            fig: `http://localhost:3001/fig.jpg`
        })
    })
})

app.listen(3001,()=>{
    console.log("server running")
})