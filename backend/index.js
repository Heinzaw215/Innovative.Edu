import express from "express";
import path from "path";
import bcrpt from "bcrypt";

const app = express();

// Set EJS as a view engine
app.set("view engine", "ejs");


app.get('/', (res, req) => {
  res.render('views/pages/home.ejs')
})
app.get('/login', (res, req) => {
  res.render('login')
})
app.get('/signup', (res, req) => {
  res.render('signup')
})

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
