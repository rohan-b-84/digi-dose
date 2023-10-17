const fs = require("fs");

function addSubscription(req, res) {
  try {
    const DATA = JSON.parse(
      fs.readFileSync("./data/subscriptions.json", "utf8")
    );
    let alreadyExists = DATA.some((item) => item.email === req.body.email);
    if (alreadyExists) {
      console.log(`${req.body.email} already added to subscription list`);
      return res.json({
        status: false,
        message: "Email already added to subscription list",
      });
    }

    DATA.push({ timestamp: Date.now(), email: req.body.email });

    fs.writeFileSync(
      "./data/subscriptions.json",
      JSON.stringify(DATA, null, 2)
    );

    console.log(`${req.body.email} added to subscription list`);
    res.json({
      status: true,
      message: "Email added to subscription list",
    });
  } catch (err) {
    console.log(err.message);
    res.json({
      status: false,
      message: "Internal Server Error",
    });
  }
}

module.exports = addSubscription;
