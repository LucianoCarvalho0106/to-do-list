const express = require("express");
const router = express.Router();
const controllers = require("../controllersRoute/controllers.js")
const methodOverride = require("method-override")


router.use(methodOverride('_method'))

router.get("/",(controllers.allTarefas))

router.get("/add",(req,res)=>{

    res.render("principal",{body:{}})
})

router.delete("/:id",controllers.deleteTarefa)
router.delete("/",express.urlencoded({extended:true}),controllers.deleteTarefa)

router.post("/",express.urlencoded({extended:true}),controllers.addDoc)

router.get("/edit/:id",controllers.loadTarefa)
router.post("/edit/:id",express.urlencoded({extended:true}),controllers.editTarefa)


module.exports = router