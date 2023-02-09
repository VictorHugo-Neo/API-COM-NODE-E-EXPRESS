import { DataTypes } from "sequelize";
import Database from "../database/index.js";

const Produto= Database.define('Produtos',{
    nome:{
        type: DataTypes.STRING,
        allowNULL: false
    },
    preco:{
        type: DataTypes.REAL,
        allowNULL: false
    }
},{

})
export default Produto;