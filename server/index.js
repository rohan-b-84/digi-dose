const express = require("express");
const app = express();
const cors = require("cors");
const updateData = require("./utilities/cronjob");
app.use(
  cors({
    origin: "*",
  })
);
const cron = require("node-cron");
const router = require("./routes/routes");
const addSubscription = require("./controllers/addSubscription");

const PORT = 5000;

app.use(express.static("data"));
app.use(express.json());

cron.schedule("*/15 * * * *", () => {
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
  res.send("hi");
});

app.use("/news", router);
app.post("/subscribe", addSubscription);

app.listen(PORT, () => {
  console.log("App is Running at PORT", PORT);
});
