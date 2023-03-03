const {Schema,model,models} = require("mongoose");

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  newp: {
    type: Boolean,
    required: false
  },
  price: {
    type: Number,
    required: true
  },
  images: {
    type: [String], // Tableau de chaînes de caractères
    required: true
  },
  category: {
    type: String,
    required: true
  },
  marque: {
    type: String,
    required: false
  },
  color: {
    type: [String],
    required: false
  },
  quantity: {
    type: Number,
    required: false
  }
});

const Product = models.Product || model('Product', ProductSchema);

module.exports = Product;