import express from "express";
import mongoose from "mongoose";
import cors from "cors";
const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());

const menuSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
});

const menuModel = mongoose.model("Menu", menuSchema);

app.get("/", async (req, res) => {
try {
    const menus = await menuModel.find();
    res.send(menus);
} catch (error) {
    res.send(error.message)
}
});

app.get("/:id", async (req, res) => {
 try {
    const { id } = req.params;
    const menus = await menuModel.findById(id);
    res.send(menus);
 } catch (error) {
    res.send(error.message)
 }
});

app.post("/", async (req, res) => {
try {
    const { name, description, price } = req.body;
    const newMenus = new menuModel({ name, description, price });
    await newMenus.save();
    res.send(newMenus);
} catch (error) {
    res.send(error.message)
}
});

app.put("/user", (req, res) => {
  res.send("Got a PUT request at /user");
});

app.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
  const menus = await menuModel.findByIdAndDelete(id);
  res.send("Got a DELETE request at /user");
  } catch (error) {
    res.send(error.message)
  }
});

mongoose
  .connect("mongodb+srv://anar:anar@cluster0.aeurkzy.mongodb.net/")
  .then(() => console.log("Connected!"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
