import { DataTypes } from "sequelize";
import Database from "../database/index.js";
import bcrypt from "bcrypt.js"
const User= Database.define('Users',{
    nome:{
        type: DataTypes.STRING,
        allowNULL: false
    },
    email:{
        type: DataTypes.STRING,
        allowNULL: false
    },
    password:{
        type: DataTypes.VIRTUAL
    },
    password_hash:{
        type: DataTypes.STRING
    }
},{

})
User.beforeCreate(async (user) => {
    if(user.password){
        user.password_hash = await bcrypt.hash(toString(user.password) ,8)
    }
  });
export default User;