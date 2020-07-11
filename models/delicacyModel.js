const mongoose = require('mongoose');

const delicacySchema = new mongoose.Schema({
  delicacyName: {
    type: String,
    required: [true, 'Delicacy must have a name']
  },
  delicacyVariety: {
    type: String,
    enum: ['cakes', 'gelato', 'macaron', 'beverage'],
    required: true
  },
  delicacySubVariety: {
    type: String
  },
  delicacyImageURL: {
    type: String,
    required: [true, 'Delicacy must have an image']
  },
  delicacyImagePortfolio: [
    {
      delicacyPortfolioImageURL: {
        type: String,
        sparse: true
      }
    }
  ],
  delicacyPrice: {
    type: String,
    required: [true, 'delicacy must have a price']
  },
  delicacyDescription: {
    type: String,
    required: [true, 'Delicacy must have a description']
  },
  isBestSeller: {
    type: Boolean
  },
  isChefRecommended: {
    type: Boolean
  },
  delicacyAttributes: [
    {
      isVeg: {
        type: Boolean,
        default: 'false'
      },
      isNonVeg: {
        type: Boolean,
        default: 'false'
      },
      isVegan: {
        type: Boolean,
        default: 'false'
      },
      isGlutenFree: {
        type: Boolean,
        default: 'false'
      },
      isEggless: {
        type: Boolean,
        default: 'false'
      }
    }
  ],
  delicacyNutritionDetails: [
    {
      calories: {
        type: Number
      },
      carbs: {
        type: Number
      },
      fats: {
        type: Number
      },
      proteins: {
        type: Number
      }
    }
  ]
});

const Delicacy = mongoose.model('Delicacy', delicacySchema);

module.exports = Delicacy;
