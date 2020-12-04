const express = require("express")
const app = express()
const morgan = require("morgan")
const cors=require("cors")
app.use(cors())
app.use(morgan("dev"))
app.use(express.static(__dirname))

app.get("/code/:text",(req,res)=>{
    const data = req.params.text
    const spawn = require("child_process").spawn
    console.log(data)
    var process = spawn('python3',['./main.py',data])
    process.stdout.on('data',(data)=>{
        res.status(200).json({
            message : data.toString()
        })
        process.kill()
    })
})

const port = process.env.PORT || 3001
app.listen(port,()=>{
    console.log(port)
})