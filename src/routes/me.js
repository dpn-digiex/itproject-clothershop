var express = require('express');
const router = express.Router();
const MeController = require('../app/controllers/MeController.js');
router.get('/create-product', MeController.showCreatePage);// ok
router.get('/stored/trash/products', MeController.trashProducts);
router.get('/stored/products', MeController.showProducts);
router.get('/stored/:id/edit', MeController.showEditPage);
router.post('/products/handle-actions-form', MeController.handleActionsForm);
router.put('/products/:id', MeController.updateProduct);
router.patch('/products/:id/restore', MeController.restoreProduct);
router.delete('/products/:id', MeController.deleteProduct);
router.delete('/products/:id/hard-delete', MeController.hardDeleteProduct);
router.post('/stored',MeController.stored);
module.exports = router;
