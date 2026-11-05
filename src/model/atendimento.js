import database from "../config/database.js";

class atendimento {
    constructor() {
        this.model = database.db.define("atendimento", {
            id: {
                type: database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true                
            },
            nome: {
                type: database.db.Sequelize.STRING
            },
            idade: {
                type: database.db.Sequelize.INTEGER
            }

        })
    }
}

export default new atendimento().model