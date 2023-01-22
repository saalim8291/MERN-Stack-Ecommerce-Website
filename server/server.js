const app = require("./app");

const dotenv = require("dotenv");

dotenv.config({ path: "/.env" });

app.listen(process.env.port, () => {});
