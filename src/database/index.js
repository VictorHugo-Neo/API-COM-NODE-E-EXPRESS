import Sequelize from "sequelize";

const sequelize = new Sequelize('testeNodejs', 'root', '', {
    host: 'localhost',
    dialect: 'mariadb'
});
export default sequelize;