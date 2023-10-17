const fs = require("fs");
const moment = require("moment");

function getNewsByCategory(req, res) {
  try {
    const { category } = req.params;
    let { page = 1, limit = 10 } = req.query;
    page = parseInt(page, 10);
    limit = parseInt(limit, 10);

    const filePath = `./data/${category}news.json`;

    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        console.error(err.message);
        return res.json({ status: false, message: "Internal Server Error" });
      }

      const newsData = JSON.parse(data);
      newsData.sort((a, b) => {
        const dateA = moment(a.date);
        const dateB = moment(b.date);
        return dateB - dateA;
      });
      const startIndex = (page - 1) * limit;
      const endIndex = startIndex + limit;

      const slicedData = newsData.slice(startIndex, endIndex);

      res.json({
        status: true,
        news: slicedData,
        totalPages: Math.ceil(newsData.length / limit),
        currentPage: page,
      });
      console.log(`News fetched for ${category} category successfully`)
    });
  } catch (err) {
    console.log(err.message);
    res.json({
      status: false,
      message: "Internal Server Error",
    });
  }
}

module.exports = getNewsByCategory;
