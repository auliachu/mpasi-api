import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import 'dotenv/config'

// app config
const app = express()
const port = 4000

//middleware
app.use(express.json())
app.use(cors())

//db connection
connectDB()

//API endpoints
app.use("/api/food", foodRouter)
app.use("/images", express.static('uploads'))
app.use("/api/user", userRouter)

app.get("/",(request,response)=>{
    response.send("API Working")
})

app.listen(port,()=>{
    console.log(`Server startted on http://localhost:${port}`)
})

//mongodb+srv://myeasympasi:1628138736@cluster0.y25rbdd.mongodb.net/?

//mongodb+srv://mympasi:1234567890@cluster0.tmrscmj.mongodb.net/?

