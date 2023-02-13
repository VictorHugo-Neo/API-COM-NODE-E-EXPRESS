import Database from "../database/index.js";
import jwt from "jsonwebtoken"
import User from "../models/UserModel.js"
import authConfig from "../config/auth.js"
import nodemailer from "nodemailer"
class EsqueceuSenhaController {

    async esqueceuSenha(req, res) {
        const { email } = req.body

        if (!email) {
            return res.json("usuario não cadastrado ")
        }

        const userExists = await User.findOne({ where: { email } });
        if (!userExists) {
            return res.json('usuario não foi cadastrado.')
        }

        const { id } = userExists
        const token = jwt.sign({ id }, authConfig.secret, { expiresIn: authConfig.expiresIn })

        const url = `${req.protocol}://${req.hostname}:3000/reset/?token=${token}`
        

        var transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: 'vectorcouto123@gmail.com',
            pass: 'jtrkgjvwapwqdika'
          }
        });
        
        var mailOptions = {
          from: 'VitimDoPneu',
          to: email,
          subject: 'Sending Email using Node.js',
          text: 'That was easy!',
          html: `<a href="${url}"> Recuperar senha </a>`
        };
        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });

        return res.json("ok")
    }

}
export default new EsqueceuSenhaController




