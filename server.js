const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const morgan = require("morgan");
const passport = require("passport");
const connectDB = require("./config/db");
const session = require("express-session");

// Load config
dotenv.config({ path: "./config/config.env" });

//Passport config
// require("./config/passport")(passport);

//connect to Database
connectDB();

//initialize express
const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

// Serve static assets if in development
if (process.env.NODE_ENV === "development") {
  // Static Folder
  app.use(express.static(path.join(__dirname, "..", "build")));
}
// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "./", "client")));
}

// Session Middleware
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
  })
);

// Passport Middleware
// app.use(passport.initialize());
// app.use(passport.session());

// Routes
app.use("/api/posts", require("./routes/api/posts"));
// app.use("/auth", require("../src/routes/auth"));

const PORT = process.env.PORT || 3001;

app.listen(
  PORT,
  console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
