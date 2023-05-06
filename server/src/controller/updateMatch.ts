import { Response, Request } from "express"
import { IMatch } from "../type/match"
import Match from "../model/match"

// PUT /api/match?id={id}&player1={a}&player2={b}&score1={x}&score2={y}&serve={0|1}&round={n}&winner={0|1}
const updateMatch = async (req: Request, res: Response): Promise<void> => {
    try {
        const id = req.query.id;
        const player1 = req.query.player1;
        const player2 = req.query.player2;
        const score1 = req.query.score1;
        const score2 = req.query.score2;
        const serve = req.query.serve;
        const round = req.query.round;
        const winner = req.query.winner;

        if (winner === null) {
            const match: IMatch | null = await Match.findOneAndUpdate(
                { _id: id },
                { $push: { rounds: { player1: player1, player2: player2, score1: score1, score2: score2, serve: serve, round: round } } },
                { new: true }
            )
            res
              .status(201)
              .json({ match })
            return
        } else {
            const match: IMatch | null = await Match.findOneAndUpdate(
                { _id: id },
                { $push: { rounds: { player1: player1, player2: player2, score1: score1, score2: score2, serve: serve, round: round } }, winner: winner },
                { new: true }
            )
            res
              .status(201)
              .json({ match })
            return
        }
      } catch (error) {
        throw error
      }
  }

export default updateMatch;
