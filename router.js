const express = require("express");

const router = express.Router();

router.get("/home", (req, res) => {
    res.send("Welcome to Home Page");
});

router.get("/contact", (req, res) => {
    res.send("Welcome to Contact Page");
});

router.get("/about", (req, res) => {
    res.send("Welcome to About Page");
});

router.post("/user", (req, res) => {
    res.json({
        message: "User created successfully",
        data: req.body
    });
});

module.exports = router;
