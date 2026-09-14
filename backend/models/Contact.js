import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      trim: true,
    },

    phone: {
      type: String,
      default: "",
    },

    interestedIn: {
      type: String,
      required: true,
      enum: [
        "Rinse",
        "Shine",
        "Full Detail",
        "Unlimited plan",
        "Something else",
      ],
    },

    message: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Contact", contactSchema);