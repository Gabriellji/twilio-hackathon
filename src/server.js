// const { PORT } = require("./common/config");
const app = require("./app");

const { connect } = require("./db/db.client");

const port = process.env.PORT || 5000;

connect(() => {
  app.listen(port, (err) => {
    if (err) {
      throw new Error(`An error occurred: ${err.message}`);
    }
    console.log(`App is running on http://localhost:${port}`);
  });
});
