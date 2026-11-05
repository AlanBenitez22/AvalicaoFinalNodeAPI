import Serviceatendimento from '../service/atendimento.js'

class Controlleratendimento {

    async Buscar(req, res) {
        try {
            const nomes = Serviceatendimento.Buscar()

            res.send({ nomes })
        } catch (e) {
            res.send({ message: e.message })
        }
    }

    BuscarUm(req, res) {
        try {
            const id = req.params.id
            const nome = Serviceatendimento.BuscarUm(id)

            res.send({ nome })
        } catch (error) {
            res.send({ message: error.message })
        }
    }

    async Criar(req, res) {
        try {
            const nome = req.body.nome
            const email = req.body.email
            const senha = req.body.senha
            Serviceatendimento.Criar(nome, email, senha)

            res.send({ message: "Criado com sucesso!" })
        } catch (error) {
            res.send({ message: error.message })
        }
    }
    
    Alterar(req, res) {
        try {
            const id = req.params.id
            const nome = req.body.nome
            const email = req.body.email
            const senha = req.body.senha
            Serviceatendimento.Alterar(id, nome, email, senha)

            res.send({ message: "Alterado com sucesso!" })
        } catch (error) {
            res.send({ message: error.message })
        }
    }
    
    async Deletar(req, res) {
        try {
            const id = req.params.id
            await Serviceatendimento.Deletar(id)

            res.send({ message: "Deletado com sucesso!" })
        } catch (error) {
            res.send({ message: error.message })
        }
    }

}

export default new Controlleratendimento()