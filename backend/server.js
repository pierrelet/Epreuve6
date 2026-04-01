const express = require("express");
const app = express();

app.get("/health", (req, res) => {
  res.json({ status: "ok", demo: "B" });
});

app.listen(3000, () => console.log("VitalSync API on :3000"));
