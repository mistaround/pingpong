import express, { Express } from "express"
import mongoose from "mongoose"
import cors from "cors"
import route from "./route"

const app: Express = express()

const PORT: string | number = process.env.PORT || 4000

app.use(cors())
app.use(route)

const uri: string = `${process.env.MONGO_DBURL}`

mongoose
  .connect(uri)
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    )
  )
  .catch(error => {
    throw error
  })