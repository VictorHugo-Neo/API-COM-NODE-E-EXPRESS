import {Router, json} from "express"
import cors from "cors"

import EsqueceuSenhaController from "./controllers/EsqueceuSenhaController.js"
import ProductController from "./controllers/productController.js"
import SessionController from "./controllers/SessionController.js"
import userController from "./controllers/userController.js"
import authMiddleware from "./middlewares/auth.js"
import RecuperarSenhaController from "./controllers/RecuperaSenhaController.js"

const routes = new Router()



routes.use(json())
routes.use(cors())


routes.post("/user/create",userController.addUser)
routes.post("/user/login",SessionController.CreateSession)
routes.post("/recuperarsenha",EsqueceuSenhaController.esqueceuSenha)
routes.post("/reset",RecuperarSenhaController.recuperaSenha)

routes.use(authMiddleware)

routes.get("/produtos", ProductController.getProdutos)
routes.get("/produto/:id",ProductController.getProduto)
routes.post("/produto/add",ProductController.addProduto)
routes.put("/produto/update",ProductController.updateProduto)
routes.delete("/produto/delet/:id",ProductController.deletProduto)


export default routes 