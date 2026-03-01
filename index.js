const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("CI/CD Auto Deploy Working 🚀");
});

module.exports = app;

if (require.main === module) {
    const PORT = 3000;
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}