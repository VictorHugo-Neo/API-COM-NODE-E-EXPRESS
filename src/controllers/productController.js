import Database from "../database/index.js";
import ProductModel from "../models/productModel.js";


class ProdutoController {
    constructor() {
        Database.sync()
    }
    async addProduto(req, res) {
        const { nome, preco } = req.body

        await ProductModel.create({
            nome: nome,
            preco: preco
        })
        return res.json({
            menssagem: "Produto criado com sucesso!",
            data: {
                nome, preco
            }
        })
    }

    async getProdutos(req, res) {

        const produtos = await ProductModel.findAll()
        return res.json(produtos)
    }

    async getProduto(req, res) {
        const { id } = req.params
        const produto = await ProductModel.findByPk(id)

        return res.json(produto)
    }

    async updateProduto(req, res) {
        const { id, preco } = req.body

        const prodUp = await ProductModel.update({
            preco: preco

        }, {
            where: {
                id: id
            }
        })
        const product = await ProductModel.findByPk(id)
        return res.json(product)
    }
    async deletProduto(req, res) {
        const {id} = req.params
        
        await ProductModel.destroy({
            where: {
                id: id
            }
        });
        return res.json({ menssagem: "Produto deletado com sucesso"})
    }
}

export default new ProdutoController()