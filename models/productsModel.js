const getCollection = require('./get-collection');

const create = async (name, quantity) => {
  const product = await getCollection('products').then((collection) => collection.insertOne({ name, quantity }));
  return { _id: product.insertedId, name, quantity };
};

const getByName = async (name) =>
  getCollection('products').then((collection) => collection.findOne({ name }));

module.exports = {
  create,
  getByName,
};
