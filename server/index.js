const express = require("express");
const app = express();
const cors = require("cors");
const updateData = require("./utilities/cronjob");

const PORT = process.env.PORT || 5000;
const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:5173";

app.use(
  cors({
    origin: [FRONTEND_URL],
  })
);

const cron = require("node-cron");
const router = require("./routes/routes");
const addSubscription = require("./controllers/addSubscription");

app.use(express.static("data"));
app.use(express.json());

cron.schedule("*/2 * * * *", () => {
  updateData(
    "india",
    "https://www.thehindu.com/news/national/feeder/default.rss",
    "./data/indianews.json"
  );
  updateData(
    "sport",
    "https://sports.ndtv.com/rss/all",
    "./data/sportnews.json"
  );
  updateData(
    "tech",
    "https://www.theverge.com/rss/index.xml",
    "./data/technews.json"
  );
});

app.get("/", (req, res) => {
  res.send("Digi Dose Server is Running!");
});

app.use("/news", router);
app.post("/subscribe", addSubscription);

app.listen(PORT, () => {
  console.log("App is Running at PORT", PORT);
});
