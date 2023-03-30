import mongoose from "mongoose";

const ExampleSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number },
});

export default mongoose.models.example ||
  mongoose.model("example", ExampleSchema);
