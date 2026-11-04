import database from "../config/database.js";

class clientes {
    constructor() {
        this.model = database.db.define("clientes", {
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

export default new clientes().model