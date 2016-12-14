const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  productName: {type: String},
  description: {type: String},
  sku: {type: String},
  quantity: {type: String}
});

ProductSchema.virtual('fullProduct').get(function(){
  return `${this.productName} ${this.description}`
})

const Product = mongoose.model('product', ProductSchema);

module.exports = Product;
