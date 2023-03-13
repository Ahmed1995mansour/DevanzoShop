import express from "express";
import {
  addOrderItems,
  GetOrderById,
  UpdateOrderToPaid,
  UpdateOrderToDelivered,
  getLoggedInUserOrders,
  getOrders,
} from "../controllers/orderController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").post(protect, addOrderItems).get(protect, admin, getOrders);
router.route("/myorders").get(protect, getLoggedInUserOrders);
router.route("/:id").get(protect, GetOrderById);
router.route("/:id/pay").put(protect, UpdateOrderToPaid);
router.route("/:id/deliver").put(protect, admin, UpdateOrderToDelivered);

export default router;
