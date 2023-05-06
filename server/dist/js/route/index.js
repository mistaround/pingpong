"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
// import getMatch from "../controller/getMatch"
// import createMatch from "../controller/createMatch"
// import updateMatch from "../controller/updateMatch"
const getHistory_1 = __importDefault(require("../controller/getHistory"));
const updateHistory_1 = __importDefault(require("../controller/updateHistory"));
const router = (0, express_1.Router)();
// router.get("/api/match", getMatch)
// router.post("/api/match", createMatch)
// router.put("/api/match", updateMatch)
router.get("/api/history", getHistory_1.default);
router.put("/api/history", updateHistory_1.default);
exports.default = router;
