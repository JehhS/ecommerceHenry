const server = require('express');
const router = server.Router();
const { Product, Reviews } = require('../db.js');

router.put('/:productId/review/:idReview', async (req, res) => {
    const { productId, id } = req.params
})

//obtener todas las reviews de un producto
router.get('/product/:id/review/', (req, res) => {
    const { productId } = req.params.id;
    Reviews.findAll({
        where: {
            productId: parseInt(productId)
        },
        include: [{model: Product}]
    })
    .then((review) => res.status(200).send(review))
    .catch(err => res.send(err))
})