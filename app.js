import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import session from "express-session";
import adminRouter  from './routes/admin.route.js';
import categoryRouter from './routes/category.route.js';
const app=express();
app.set("view engine","ejs");
const __dirname=path.dirname(fileURLToPath(import.meta.url));

app.use(express.static(path.join(__dirname,"public")));
app.use(session({secret:"asdfghjklkjhgfd",saveUninitialized:"true", resave:true}))
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use('/admin',adminRouter);
app.use("/category",categoryRouter);

app.listen(100,(err)=>{
 console.log("Server Started");
})

