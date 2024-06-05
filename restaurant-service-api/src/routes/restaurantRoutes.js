const express = require('express');
const router = express.Router();
const {
  createRestaurant,
  getRestaurantById,
  updateRestaurantById,
  deleteRestaurantById,
  getAllRestaurants,
} = require('../controllers/restaurantController');

router.post('/restaurants', createRestaurant);
router.get('/restaurants/:id', getRestaurantById);
router.put('/restaurants/:id', updateRestaurantById);
router.delete('/restaurants/:id', deleteRestaurantById);
router.get('/restaurants', getAllRestaurants);

module.exports = router;
