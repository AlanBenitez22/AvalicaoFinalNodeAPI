import { Sequelize } from 'sequelize'

//configurar a conexao com o banco de dados

class Database {
    constructor() {
        this.init()
    }
    init() {
        this.db = new Sequelize( {
            dialect: 'postgres',
            database: 'senac_db_otx9',
            username: 'senac_db_otx9_user',
            password: 'TKspTi5HGexW9VNkNA35MP94x0YwoLvF',
            host: 'dpg-dbh794vlk1mc73amrohg-a.oregon-postgres.render.com',
            dialectOptions: {
                ssl: {
                    require: true,
                    rejectUnauthorized: false
                }
            }
})

    }
}

export default new Database()