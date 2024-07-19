const express = require("express");

//initialisation
const aap = express();

aap.use(express.json());

const port = 8081;

const  toDoList = ["yuva","bhuva","praveen","prabhu"];

//http://localhost:8081/todos
aap.get("/todos", (req, res)=>{
    res.status(200).send(toDoList);
})

aap.post("/todos",(req, res)=>{
    let newToDoItem = req.body.item;
    toDoList.push(newToDoItem);
    res.status(201).send({
        message: "Task was added successfully"
    })
})

aap.delete("/todos",(req,res)=> {
    const itemToDelete = req.body.item;
    toDoList.find((elem,i)=>{
        if(elem == itemToDelete){
            toDoList.splice(i,1)
        }
    })
    res.status(204).send({
        message: "Deleted the item"
    })
})

aap.all("/todos",(req,res)=>{
    res.status(501).send()
})

aap.all("*",(req,res)=>{
    res.status(404).send()
})
aap.listen(port,()=>{
    console.log(`Express Server is up and running succesfully on port ${port}`)
})