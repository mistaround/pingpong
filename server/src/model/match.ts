import { IMatch } from "../type/match"
import { model, Schema } from "mongoose"

const matchSchema: Schema = new Schema(
  {
    player1: {
        type: String,
        required: true,
    },
    player2: {
        type: String,
        required: true,
    },
    serve: {
        type: String,
        required: true,
    }
  }
)

export default model<IMatch>("Match", matchSchema)