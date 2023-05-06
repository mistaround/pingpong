import { Router } from "express"
// import getMatch from "../controller/getMatch"
// import createMatch from "../controller/createMatch"
// import updateMatch from "../controller/updateMatch"
import getHistory from "../controller/getHistory"
import updateHistory from "../controller/updateHistory"

const router: Router = Router()

// router.get("/api/match", getMatch)
// router.post("/api/match", createMatch)
// router.put("/api/match", updateMatch)
router.get("/api/history", getHistory)
router.put("/api/history", updateHistory)

export default router