import atendimento from '../model/atendimento.js'

class Serviceatendimento {

    async Buscar() {
        return atendimento.findAll()
    }
    
    BuscarUm(id) {
        if(!id || isNaN(id)) {
            throw new Error("Favor informar somente números")
        }

        return atendimento.BuscarUm(id)
    }
    
    async Criar(nome, idade) {
        if(!nome) {
            throw new Error("Favor informar o nome")
        }
        
        await atendimento.create({ nome, idade })
    }
    
    async Alterar(id, nome) {
        if(!id || isNaN(id) || !nome) {
            throw new Error("Favor informar todos os dados")
        }
        const atendimentoAlterar = await atendimento.findByPk(id)
        if(!atendimentoAlterar) {
            throw new Error("atendimento não encontrada")
        }

        atendimentoAlterar.nome = nome

        await atendimentoAlterar.save()
    }

    async Deletar(id) {
        if(!id || isNaN(id)) {
            throw new Error("Favor informar o Id corretamente")
        }
        const atendimentoDelete = await atendimento.findByPk(id)
        
        if(!atendimentoDelete) {
            throw new Error("Favor informar o ID corretamente")
        }
        
        await atendimentoDelete.destroy()
    }
    
}

export default new Serviceatendimento()