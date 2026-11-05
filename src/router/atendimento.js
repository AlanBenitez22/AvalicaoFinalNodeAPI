import express from "express"
import Controlleratendimento from '../controller/atendimento.js'

const router = express.Router()

router.get("/buscar", Controlleratendimento.Buscar)
router.get("/buscarUm/:id", Controlleratendimento.BuscarUm)
router.post("/criar", Controlleratendimento.Criar)
router.put("/alterar/:id", Controlleratendimento.Alterar)
router.put("/alterar/:concluido", Controlleratendimento.Alterarconcluido)
router.delete("/deletar/:id", Controlleratendimento.Deletar)

export default router