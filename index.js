import express from "express";
import path from "node:path";
import ejs from "ejs";

const app = express();
const port = 3000;

app.use(express.static(path.join(import.meta.dirname, "public")));


// Write your code here:

app.engine("html", ejs.renderFile);
app.set("view engine", "html");
app.set("views", path.join(import.meta.dirname, "public"));

app.get("/", (req, res) => {
  res.render("home", { username: "Fidel Rodriguez" });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});




app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});