const http = require("http");
const port = 8081;

const  toDoList = ["yuva","bhuva","praveen","prabhu"];
http.createServer((req, res) => {  
    const {method,url} = req;  
    console.log(method,url)
    res.end();})
    
.listen(port, () => {  
    console.log(`NodeJs Server is up and running succesfully on port ${port}`)
})
//http://localhost:8081/

