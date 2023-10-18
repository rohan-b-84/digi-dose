const fs = require("fs");
const Parser = require("rss-parser");
const axios = require("axios");
const extractor = require("unfluff");
var uniqid = require("uniqid");

const updateData = async (category, url, dbPath) => {
  try {
    const parser = new Parser();
    let feed = await parser.parseURL(url);

    let items = feed.items;
    const DATA = JSON.parse(fs.readFileSync(dbPath, "utf8"));

    for (const item of items) {
      let id = uniqid();
      let title = item.title;
      let link = item.link;
      let description = await item.contentSnippet;
      let date = item.pubDate || Date.now();

      let alreadyExists = DATA.some((newsItem) => newsItem.link === link);

      if (!alreadyExists) {
        try {
          const response = await axios.get(link);
          const data = extractor(response.data);

          let content = await data.text;
          let imgLink = await data.image;

          const newNewsItem = {
            title,
            link,
            description,
            date,
            content,
            imgLink,
            category,
            id,
          };

          DATA.push(newNewsItem);

          fs.writeFileSync(dbPath, JSON.stringify(DATA, null, 2));
          console.log(`Updated RSS data for ${category} at ${new Date()}`);
        } catch (error) {
          console.error(`Error processing item ${link}: ${error.message}`);
        }
      }
    }
  } catch (error) {
    console.error(`Error updating RSS data for ${category}: ${error.message}`);
  }
};

module.exports = updateData;
