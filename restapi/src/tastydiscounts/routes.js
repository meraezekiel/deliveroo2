const {Router} = require ('express');
const controller = require ('./controller')

const router = Router();

router.get('/', controller.getTastyDiscountsHeader);
// router.get('/', controller.getFeatured);
// router.get('/:id',controller.getFoodById);

module.exports = router;