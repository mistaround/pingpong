import { Document, Types } from "mongoose"

export interface IMatch extends Document {
  _id: Types.ObjectId;
  player1: string;
  player2: string;
  serve: string;
}