const {Router} = require ('express');
const controller = require ('./controller')

const router = Router();

router.get('/:genre',controller.getFeaturedByGenre);

module.exports = router;