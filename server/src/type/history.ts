import { Document } from "mongoose"

export interface IHistory extends Document {
  name: string;
  wins: number;
  points: number;
}