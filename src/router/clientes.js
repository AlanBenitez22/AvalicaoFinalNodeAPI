import express from "express"
import Controllerclientes from '../controller/clientes.js'

const router = express.Router()

router.get("/buscar", Controllerclientes.Buscar)
router.get("/buscarUm/:id", Controllerclientes.BuscarUm)
router.post("/criar", Controllerclientes.Criar)
router.put("/alterar/:id", Controllerclientes.Alterar)
router.delete("/deletar/:id", Controllerclientes.Deletar)

export default router