const dotenv = require("dotenv");
const fs = require("fs");
dotenv.config({ path: "./../../config.env" });
const mongoose = require("mongoose");
const Event = require("./../../models/usereventModel");
const User = require("./../../models/userModel");
const Userevent = require("./../../models/usereventModel");

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);
mongoose.connect(DB).then((con) => {
  console.log("DB connection successful!");
});
const events = JSON.parse(
  fs.readFileSync("./../../dev-data/data/events.json", "utf-8")
);
const users = JSON.parse(
  fs.readFileSync("./../../dev-data/data/users.json", "utf-8")
);
//Importing Data
const importData = async () => {
  try {
    await Userevent.create(events, { validateBeforeSave: false });
    await User.create(users, { validateBeforeSave: false });
    console.log("Data imported successfully");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};
//Data Deletion
const deleteData = async () => {
  try {
    await Event.deleteMany();
    await User.deleteMany();
    console.log("Data deleted successfully");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};
console.log(process.argv);
if (process.argv[2] === "--import") {
  importData();
} else if (process.argv[2] === "--delete") {
  deleteData();
}
