const express = require("express");

const app = express();

app.use(express.json());

const router = require("./router");

app.use("/", router);

const PORT = process.env.PORT || 5001;

// Start server only when running server.js directly
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

module.exports = app;
