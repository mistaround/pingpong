"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const match_1 = __importDefault(require("../model/match"));
// PUT /api/match?id={id}&player1={a}&player2={b}&score1={x}&score2={y}&serve={0|1}&round={n}&winner={0|1}
const updateMatch = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
            const match = yield match_1.default.findOneAndUpdate({ _id: id }, { $push: { rounds: { player1: player1, player2: player2, score1: score1, score2: score2, serve: serve, round: round } } }, { new: true });
            res
                .status(201)
                .json({ match });
            return;
        }
        else {
            const match = yield match_1.default.findOneAndUpdate({ _id: id }, { $push: { rounds: { player1: player1, player2: player2, score1: score1, score2: score2, serve: serve, round: round } }, winner: winner }, { new: true });
            res
                .status(201)
                .json({ match });
            return;
        }
    }
    catch (error) {
        throw error;
    }
});
exports.default = updateMatch;
