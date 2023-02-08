import {Router} from "express"
import ProductController from "./controllers/productController.js"

const routes = new Router()

routes.get("/produtos", ProductController.getProdutos)
routes.get("/produto/:id",ProductController.getProduto)

export default routes 