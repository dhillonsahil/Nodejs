const http = require('http')
const port = process.env.PORT || 3000;
const fs= require('fs')
const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html')
    
    if(req.url=='/'){
    res.end('<h1>Hey Sahil ! How are you</h1>')
    }else if(req.url=='/about'){
       const data= fs.readFileSync('./index.html')
       res.end(data.toString())
    }else{
    res.end('<h1>404 ! Not Found</h1>')
    }
})

server.listen(port ,()=>{
    console.log('Server is listening at '+port)
})

