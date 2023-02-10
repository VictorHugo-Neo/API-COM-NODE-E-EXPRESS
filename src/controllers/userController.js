import Database from "../database/index.js";
import User from "../models/UserModel.js";
class UserController {
    async addUser(req, res) {
        const { email } = req.body
        const userExists = await User.findOne({ where: { email } });
        if (userExists) {
            return res.json('usuario já cadastrado.')
        }
        const { id, nome } = await User.create(req.body)
        return res.json({
            id,
            nome
        })
    }

}
export default new UserController