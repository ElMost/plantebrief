import express from "express";
import dotenv from "dotenv";
import cors from "cors";

AppDataSource.initialize().then(async() => {
  const app = express();
  app.use(cors());
  const port = process.env.PORT || 8080;
  dotenv.config({ path: ".env.local" });
  app.use(express.json());
  app.use("/api/plante", planteRouter);
  app.listen(8080, () => {
    console.log("seveur run on port 8080");
  });
})
.catch((error)=> console.log(error));
