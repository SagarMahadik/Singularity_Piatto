const express = require('express');
const delicacyController = require('../controllers/delicacyController');
const authController = require('../controllers/authController');

const router = express.Router();

router.route('/').get(delicacyController.getAllDelicacies);

router.route('/:category').get(delicacyController.getDelicaciesByVariety);

router.route('/details/:id').get(delicacyController.getDelicacyDetails);

router.use(authController.protect);
router.use(authController.restrictTo('admin'));

router.route('/').post(delicacyController.createDelicacy);

module.exports = router;
