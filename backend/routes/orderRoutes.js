import express from 'express'
import {
  addOrderItems,
  GetOrderById,
  UpdateOrderToPaid,
} from '../controllers/orderController.js'
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/').post(protect, addOrderItems)
router.route('/:id').get(protect, GetOrderById)
router.route('/:id/pay').put(protect, UpdateOrderToPaid)

export default router
