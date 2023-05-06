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
// POST /api/match?player1={str1}&player2={str2}&serve={0|1}
const createMatch = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const player1 = req.query.player1;
        const player2 = req.query.player2;
        const serve = req.query.serve;
        const match = new match_1.default({
            player1: player1,
            player2: player2,
            serve: serve,
        });
        const newMatch = yield match.save();
        res
            .status(201)
            .json({ newMatch });
    }
    catch (error) {
        throw error;
    }
});
exports.default = createMatch;
