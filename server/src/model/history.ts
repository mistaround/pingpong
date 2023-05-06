import { IHistory } from "../type/history"
import { model, Schema } from "mongoose"

const historySchema: Schema = new Schema(
  {
    name: {
        type: String,
        required: true,
    },
    wins: {
        type: Number,
        required: true,
    },
    points: {
        type: Number,
        required: true,
    },
  }
)

export default model<IHistory>("History", historySchema)