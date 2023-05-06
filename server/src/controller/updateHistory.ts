import { Response, Request } from "express"
import { IHistory } from "../type/history"
import History from "../model/history"

// PUT /api/history?player={str}&points={number}
const updateHistory = async (req: Request, res: Response): Promise<void> => {
    try {
        const player = req.query.player;
        const points = req.query.points;

        const history: IHistory | null = await History.findOneAndUpdate(
            { name: player },
            { $inc: { points: points, wins : 1 } },
            { new: true }
        );

        if (history === null) {
            const newHistory: IHistory = new History({
                name: player,
                wins: 1,
                points: points
            });
            await newHistory.save();
            res
              .status(201)
              .json({ newHistory })
            return
        }

        res.status(201).json({ history });

        
      } catch (error) {
        throw error
      }
  }

export default updateHistory;
