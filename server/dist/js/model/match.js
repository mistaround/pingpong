"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const matchSchema = new mongoose_1.Schema({
    player1: {
        type: String,
        required: true,
    },
    player2: {
        type: String,
        required: true,
    },
    serve: {
        type: String,
        required: true,
    }
});
exports.default = (0, mongoose_1.model)("Match", matchSchema);
