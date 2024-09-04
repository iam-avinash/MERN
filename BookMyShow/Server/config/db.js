const mongoose = require("mongoose");
// require("dotenv").config();
const uri =
  "mongodb+srv://avpatil786:W4rx0L6MJsAwz5DT@cluster0.fvknr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// mongoose.connect(process.env.url, {});
// console.log(process.env.url);
// const connection = mongoose.connection;

// connection.on("Connected", () => {
//   console.log("Connection has been Established with mongoDB");
// });

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(uri, {});

  console.log("Data base conncted");

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
