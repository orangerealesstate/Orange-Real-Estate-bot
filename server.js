const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Orange Real Estate Bot is running 🚀");
});

const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
