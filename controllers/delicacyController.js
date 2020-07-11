/**
 * Note : "getAllDelicacies" to be re-factored.
 */

const Delicacy = require('../models/delicacyModel');
const catchAsync = require('../utils/catchAsync');
const factory = require('./handlerFactory');

exports.createDelicacy = factory.createOne(Delicacy);

exports.getDelicaciesByVariety = factory.showAll(Delicacy);

exports.getAllDelicacies = factory.showAllDelicacies(Delicacy);

exports.getDelicacyDetails = factory.getOne(Delicacy);
