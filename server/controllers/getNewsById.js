const fs = require("fs");

function getNewsById(req, res) {
  try {
    const { category, id } = req.params;
    const filePath = `./data/${category}news.json`;

    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        console.error(err);
        return res.json({ status: false, message: "Internal Server Error" });
      }

      const newsData = JSON.parse(data);
      const selectedNews = newsData.find((news) => news.id === id);
      console.log(`News with id=${id} fetched successfully`)
      res.json({ status: true, news: selectedNews || null });
    });
  } catch (err) {
    console.log(err.message);
    res.json({
      status: false,
      message: "Internal Server Error",
    });
  }
}

module.exports = getNewsById;
