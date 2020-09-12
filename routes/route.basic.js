const express = require("express");
const bodyParser = require("body-parser");
const addNew = require("../doa/user.doa");
const db = require("../connections/connection.mongo")();
const app = express();
app.use(bodyParser.json());

module.exports = () => {
  const router = express.Router();

  //get data
  router.get("/", (req, res) => {
    res.send("GET request to the homepage");
  });

  //post data
  router.post("/", async (req, res) => {
    try {
      const saveUserData = await addNew(req.body);
      const text = "User created successfully!",
        payload = {
          storedata: saveUserData,
        },
        message = "User created successfully!";

      res.status(200).json({ text: text, payload: payload, message: message });
    } catch (error) {
      console.log("cannot save to database");
      console.log(error);
    }
  });

  //get by id
  router.get("/:bookId", (req, res) => {
    res.send(req.params.bookId);
  });

  router.put("/:bookid", function (req, res) {
    const { id } = req.params.bookid;
    res.send(`update bookid with reg number of ${req.params.bookid}`);
  });

  router.delete("/:id", function (req, res) {
    const { id } = req.params.id;
    res.send(`Delete record with id ${id}`);
  });
  return router;
};
