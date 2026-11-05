import clientes from '../model/clientes.js'

class Serviceclientes {

    async Buscar() {
        return clientes.findAll()
    }
    
    BuscarUm(id) {
        if(!id || isNaN(id)) {
            throw new Error("Favor informar somente números")
        }

        return clientes.BuscarUm(id)
    }
    
    async Criar(nome, email, senha) {
        if(!nome) {
            throw new Error("Favor informar o nome")
        }
        
        await clientes.create({ nome, email, senha })
    }
    
    async Alterar(id, nome, email, senha) {
        if(!id || isNaN(id) || !nome || !email || !senha) {
            throw new Error("Favor informar todos os dados")
        }
        const clientesAlterar = await clientes.findByPk(id)
        if(!clientesAlterar) {
            throw new Error("clientes não encontrado")
        }

        clientesAlterar.nome = nome

        await clientesAlterar.save()
    }

    async Deletar(id) {
        if(!id || isNaN(id)) {
            throw new Error("Favor informar o Id corretamente")
        }
        const clientesDelete = await clientes.findByPk(id)
        
        if(!clientesDelete) {
            throw new Error("Favor informar o ID corretamente")
        }
        
        await clientesDelete.destroy()
    }
    
}

export default new Serviceclientes()