import { Response, Request } from "express"
import { IHistory } from "../type/history"
import History from "../model/history"

// GET /api/history
// sort by wins descending, then points ascending
const getHistory = async (req: Request, res: Response): Promise<void> => {
    try {
      const history: IHistory[] = await History.find({}).sort({ wins: -1, points: 1 });
      res.status(200).json({ history });
    } catch (error) {
      throw error
    }
  }

export default getHistory;