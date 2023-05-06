import { Response, Request } from "express"
import { IMatch } from "../type/match"
import Match from "../model/match"

// POST /api/match?player1={str1}&player2={str2}&serve={0|1}
const createMatch = async (req: Request, res: Response): Promise<void> => {
    try {
        const player1 = req.query.player1;
        const player2 = req.query.player2;
        const serve = req.query.serve;
    
        const match: IMatch = new Match({
            player1: player1,
            player2: player2,
            serve: serve,
        })
    
        const newMatch: IMatch = await match.save()
        res
          .status(201)
          .json({ newMatch })
      } catch (error) {
        throw error
      }
  }

export default createMatch;
