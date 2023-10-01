import mongoose from "mongoose";

export const dbConnect = async () => {
  try {
    const dbURI = process.env.DB_URI! + process.env.DB!;
    mongoose.connect(dbURI);
    const connection = mongoose.connection;
    connection.on("connected", () => {});
    connection.on("error", (error) => {
      console.log("Database connection failed !!!");
      console.log(error);
    });
  } catch (error) {
    console.log("Database connection failed !!!");
    console.log(error);
  }
};
