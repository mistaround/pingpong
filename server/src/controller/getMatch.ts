import { Response, Request } from "express"
import { IMatch } from "../type/match"
import Match from "../model/match"

// GET /api/match/id={id}
const getMatch = async (req: Request, res: Response): Promise<void> => {
    try {
      const match: IMatch[] = await Match.find({ _id: req.query.id});
      res.status(200).json({ match });
    } catch (error) {
      throw error
    }
  }

export default getMatch;