import Serviceclientes from '../service/clientes.js'

class Controllerclientes {

    async Buscar(req, res) {
        try {
            const nomes = Serviceclientes.Buscar()

            res.send({ nomes })
        } catch (e) {
            res.send({ message: e.message })
        }
    }

    BuscarUm(req, res) {
        try {
            const id = req.params.id
            const nome = Serviceclientes.BuscarUm(id)

            res.send({ nome })
        } catch (error) {
            res.send({ message: error.message })
        }
    }

    async Criar(req, res) {
        try {
            const nome = req.body.nome
            const idade = req.body.idade
            Serviceclientes.Criar(nome, idade)

            res.send({ message: "Criado com sucesso!" })
        } catch (error) {
            res.send({ message: error.message })
        }
    }
    
    Alterar(req, res) {
        try {
            const id = req.params.id
            const nome = req.body.nome
            Serviceclientes.Alterar(id, nome)

            res.send({ message: "Alterado com sucesso!" })
        } catch (error) {
            res.send({ message: error.message })
        }
    }
    
    async Deletar(req, res) {
        try {
            const id = req.params.id
            await Serviceclientes.Deletar(id)

            res.send({ message: "Deletado com sucesso!" })
        } catch (error) {
            res.send({ message: error.message })
        }
    }

}

export default new Controllerclientes()