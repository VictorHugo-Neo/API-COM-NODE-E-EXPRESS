import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"

import User from "../models/UserModel.js"
import authConfig from "../config/auth.js"

class SessionController {
    async CreateSession(req, res) {

        const { email, password } = req.body

        const user = await User.findOne({ where: { email } })
        if (!user) {
            return res.json
            (
                {
                    msg:"Usurario não cadastrado",
                    status:"erro"
                }
        )
        }
        const checkPassword = await bcrypt.compare(toString(password), user.password_hash)
        if (!checkPassword) {
             return res.json(
                {
                    msg: "Usuário ou senha incorretos",
                    status:"erro"
                }
             )
        }
        const { id, nome } = user
        return res.json({
            user: {
                id,
                nome
            },
            token: jwt.sign({ id }, authConfig.secret),
            status: "ok"
        })
    }

}
export default new SessionController