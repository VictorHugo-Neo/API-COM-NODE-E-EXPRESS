import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

import authConfig from "../config/auth.js";
import User from "../models/UserModel.js";

class RecuperarSenhaController{
    async recuperaSenha(req,res){
        const authHeader = req.query.token
        const {newPassword} = req.body
        const {newPasswordRepeat} = req.body

        if (!authHeader || !newPassword || !newPasswordRepeat){
            return res.json("Os dados são obrigatórios")
        }
        try{
            const decoded = jwt.verify(authHeader, authConfig.secret)
            
            if(!decoded){
                return res.json("Token Inválido")
            }
            
            const password_hash = await bcrypt.hash(newPassword, 8);
            const {id} = decoded

            await User.update({password_hash: password_hash}, {
                where:{
                    id
                }
            })
            
            return res.json("Senha alterada com sucesso");

        } catch (error){
            return res.json("Erro na atualização");

        }
    }
}
export default new RecuperarSenhaController;