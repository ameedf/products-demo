const express = require('express');

const router = express.Router();

const dbService = require('./dbService');
// localhost:8080/api/products
router.get('/', async (req, res) => {
  return await fetchAllProducts(res);
});
// localhost:8080/api/products/1/units
router.post('/:id/units', async (req, res) => {
  const productId = req.params.id; /// 1
  const { units } = req.body;

  try {
    const result = await dbService.executeQuery(
      'update `store`.`products` set units = ? where id = ?',
      [units, productId]);
    return await fetchAllProducts(res);
  } catch (err) {
    res.status(500).send({ error: err });
  }

});


const fetchAllProducts = async (res) => {
  try {
    const products = await dbService.executeQuery("SELECT p.id, p.name, p.price, c.name as company, p.units, p.updatedAt FROM products as p, company as c where p.company_id = c.id");
    res.json(products);
  } catch (err) {
    res.status(500).send({ error: err });
  }
}
module.exports = router;