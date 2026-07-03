const express = require("express");

const app = express();

// მთავარი გვერდი
app.get("/", (req, res) => {
  res.send("Orange Real Estate Bot is running 🚀");
});

// Render-ის ჯანმრთელობის შემოწმება
app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
