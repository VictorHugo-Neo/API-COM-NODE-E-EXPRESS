class ProdutoController{

    async getProdutos(req,res){
        const prod = [
            {
                nome: "teclado",
                qtd: 100
            },
            {
                nome: "Monitor",
                qtd: 150
            }
        ]
        return res.json(prod)
    }

    async getProduto(req,res){
        const {id} = req.params
        const prod = [
            {
                id: id,
                nome: "teclado",
                qtd: 100
            }
        ]
        return res.json(prod)
    }

}

export default new ProdutoController()