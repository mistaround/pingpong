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
const history_1 = __importDefault(require("../model/history"));
// PUT /api/history?player={str}&points={number}
const updateHistory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const player = req.query.player;
        const points = req.query.points;
        const history = yield history_1.default.findOneAndUpdate({ name: player }, { $inc: { points: points, wins: 1 } }, { new: true });
        if (history === null) {
            const newHistory = new history_1.default({
                name: player,
                wins: 1,
                points: points
            });
            yield newHistory.save();
            res
                .status(201)
                .json({ newHistory });
            return;
        }
        res.status(201).json({ history });
    }
    catch (error) {
        throw error;
    }
});
exports.default = updateHistory;
