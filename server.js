const Express = require("express");
const path = require("path");

const app = new Express();
const port = 80;

app.use(Express.static(path.join(__dirname, "/src")));

const renderHome = (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
};

app.get("/", renderHome);

app.listen(port, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.info(
      `==> 🌎  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`
    );
  }
});