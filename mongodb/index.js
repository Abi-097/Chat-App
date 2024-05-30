import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("Database is already connected");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "HeyChat",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = true;

    console.log("MongoDB is connected successfully");
  } catch (error) {
    console.log("error", error);
  }
};
