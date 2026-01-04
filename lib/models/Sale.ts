import mongoose from "mongoose"

const SaleSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    status: {
      type: String,
      enum: ["Open", "Lost", "Sold", "Stalled"],
      default: "Open",
    },
    amount: { type: Number, required: true },
    stage: { type: String, required: true },
    nextActivity: { type: String, required: true },
  },
  { timestamps: true }
)

export default mongoose.models.Sale ||
  mongoose.model("Sale", SaleSchema)
