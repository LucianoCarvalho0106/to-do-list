
const People = require("../model/People")


const addDoc = async(req,res)=>{
    
    let people = new People(req.body)
    try {
         await people.save()
        res.render("del",{tarefas:await People.find({})})
        console.log("Documento adicionado")
    } catch (error) {
        res.render("principal",{error,body:req.body })
        console.log("Houve um erro ao salvar o documento",error)
    }
}

const allTarefas = async (req,res)=>{
    let tarefas = await People.find({})
    try {
        res.render("del",{tarefas})
    } catch (error) {
        console.log("Erro ao mostrar todas as tarefas",error)
    }
}

const deleteTarefa = async (req,res)=>{
    let id = req.params.id;
    if(!id){
        id = req.body.id
    }
    
    try {
        await People.findByIdAndDelete(id)
        res.redirect("/")
        console.log("Arquivo apagado com sucesso!")
    } catch (error) {
        res.status(404).send(error)
    }
    
}

const editTarefa = async(req,res)=>{
    let tarefas = {}
    tarefas.tarefa = req.body.tarefa;
    
    let id = req.params.id
    if(!id){
        id = req.body.id
    }

    try {
       let doc = await People.updateOne({_id:id},tarefas)
       res.render("del",{body:req.body.tarefa,tarefas:await People.find({})})
    } catch (error) {
        
    }
}


const loadTarefa = async(req,res)=>{
    let id = req.params.id

    try {
        let tarefa = await People.findById(id)
        res.render("edit",{body:tarefa})
    } catch (error) {
        res.status(404).send(error)
    }
}


module.exports = {addDoc,allTarefas,deleteTarefa,editTarefa,loadTarefa}

