import express from 'express'
import {
  addOrderItems,
  GetOrderById,
  UpdateOrderToPaid,
  getLoggedInUserOrders,
} from '../controllers/orderController.js'
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/').post(protect, addOrderItems)
router.route('/myorders').get(protect, getLoggedInUserOrders)
router.route('/:id').get(protect, GetOrderById)
router.route('/:id/pay').put(protect, UpdateOrderToPaid)

export default router
