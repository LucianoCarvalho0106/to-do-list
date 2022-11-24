const PORT = 3000;
const express = require("express");
const mongoose = require("mongoose");
const app = express();

const router = require("./routes/tarefasRoute");
const path = require("path");

app.use("/",router);
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname,"/public")))
app.set("views",path.join(__dirname,"views"));



mongoose.connect("mongodb://127.0.0.1/todolist").then(res=>{
    console.log("Conectado ao Banco!")
}).catch(err=>{
    console.log("Houve um erro!")
})


app.listen(PORT,console.log("Servidor rodando na porta", PORT))


