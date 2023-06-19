import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO as string);
  } catch (error) {
    throw new Error(error as string);
  }
};

export default connectDb;
