const { login, signup } = require('../controller/Authcontroller');
const { loginvalidation, signupValidation } = require('../middleware/Authvalidation');

const router = require('express').Router();
const Cart=require("./../models/cart");

// Corrected route for signup
router.post("/signup", signupValidation, signup);
router.post("/login", loginvalidation, login);

router.post("/cart", async (req, res) => {
    try {
        console.log("Received cart data:", req.body); // ✅ Debugging Step

        const { product, price, quantity, image } = req.body;

        if (!product || !price || !quantity || !image) {
            return res.status(400).json({ error: "Missing required fields" });
        }

        const newCartItem = new Cart({ product, price, quantity, image });
        const response = await newCartItem.save();

        console.log("Saved to MongoDB:", response); // ✅ Debugging Step
        res.status(201).json(response);
    } catch (err) {
        console.error("Error saving cart item:", err);
        res.status(500).json({ error: "Internal server error" });
    }
});


module.exports = router;
