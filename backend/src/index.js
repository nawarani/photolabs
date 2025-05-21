const PORT = process.env.PORT || 8001;
const ENV = require("./environment");

const app = require("./application")(ENV);
const server = require("http").Server(app);

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT} in ${ENV} mode.`);
});

app.get("/api/photos", (req, res) => {
  console.log(res);
  // create an array from the todoData object
  // const data = Object.values(todoData);

  // res.json(data);
});
