import dotenv from "dotenv";
import connectDB from "./db/index.js";
// import { app } from "./app.js";
dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() => {
    // app.on(event, callback )
    app.on("error", (error) => {
      console.log("ERRR :", error);
      throw error;
    });

    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port : ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO db Connection failed", err);
  });
