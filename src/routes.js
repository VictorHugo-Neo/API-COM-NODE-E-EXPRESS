import {Router, json} from "express"
import ProductController from "./controllers/productController.js"

const routes = new Router()

routes.use(json())

routes.get("/produtos", ProductController.getProdutos)
routes.get("/produto/:id",ProductController.getProduto)
routes.post("/produto/add",ProductController.addProduto)
routes.put("/produto/update",ProductController.updateProduto)
routes.delete("/produto/delet/:id",ProductController.deletProduto)

export default routes 