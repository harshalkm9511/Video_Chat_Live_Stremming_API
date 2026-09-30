const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const http = require("http");
const { Server } = require("socket.io");

require('dotenv').config();

const app = express();
const server = http.createServer(app);
const corsOptions = {
    origin: "http://localhost:5173",
    credentials: true
}
const io = new Server(server, { cors: corsOptions });

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");

const connectDb = async () => {
    await mongoose.connect(process.env.MONGO_URL);
}
connectDb();

app.get("/", (req, res) => {
    res.status(200).json({
        message: "server is running on port 3000"
    });
});

io.on("connection", (socket) => {
    console.log("---------User is connected in backend-----------");

    socket.on("chat message", (msg) => {
        console.log(msg);
        io.emit("chat message", msg);
    });

    socket.on("disconnect", () => {
        console.log("User leved");
    })
});

app.use("/user", userRoute);
app.use("/auth", authRoute);

server.listen(3000, () => {
    console.log("Server is running on port 3000");
}); 