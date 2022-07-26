import express from "express"
import "dotenv/config"

const app = express()

app.get("/", (req, res) => {
  res.send("Up and runnings")
})

const port = process.env.PORT

app.listen( port, () => console.log(`listen on port ${port}`))
