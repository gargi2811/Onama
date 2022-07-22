const express = require('express');
const router = express.Router();
const sellerController = require('../controller/sellerController');

router.route('/').get(sellerController.getSellers);

// router.route('/:id').delete(sellerController.deleteSeller);

// router
//   .route('/:id')
//   .get(userController.getUser)
//   .patch(userController.updateUser)
//   .delete(userController.deleteUser);

module.exports = router;
