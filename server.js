import * as jsonServer from "json-server";

const app = jsonServer.create();
app.use("/", jsonServer.router(require("./db.json")));
app.listen(3000, () => console.log("JSON Server is running on port 3000"));