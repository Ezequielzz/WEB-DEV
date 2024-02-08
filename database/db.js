const mongoose = require("mongoose");

const connectToDb = () => {
  mongoose
    .connect(
      "mongodb+srv://root:admin@cluster0.hwxxxz2.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => console.log("MongoD Atlas CONECTADO"))
    .catch((err) => console.log(err));
};

module.exports = connectToDb;
