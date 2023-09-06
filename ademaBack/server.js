//import express from"express";
import express from "express";
import http from "http"

const app = express();
// import mariadb from "mariadb";
import appareilRoute from "./routes/appareil.js";
import fournisseurRoute from "./routes/fournisseur.js";
import signup from "./routes/signup.js"
import login from "./routes/login.js"
//import signUpRoute from "./routes/signup.js"
//import loginRoute from "./routes/login.js"
import cors from "cors";
import bodyParser from "body-parser"
//import cookieParser from "cookie-parser";
//import session from "express-session"
import mongoose from "mongoose";
import {Server} from "socket.io"

 const server = http.createServer(app)
const io = new Server(server,{
    cors:{
        origin:"http://localhost:3000",
        methods:["GET,POST,PUT,DELETE"]
    }
});

/*Headers('Access-Control-Allow-Origin: *')
Headers('Access-Control-Allow-Methods: POST,GET,OPTIONS,PUT,DELETE')
Headers('Access-Control-Allow-Headers: Content-Type, X-Auth-Token, Origin, Authorization')*/


app.use(express.urlencoded({extended: false}))
app.use(bodyParser.json());
app.use(express.json());
app.use(cors())
// app.use(cors({
//     origin:"http://localhost:3000"
    
// }))

/*mongoose.connect('mongodb://localhost:27017').then(()=>{
    console.log('connected to mongo');
    app.listen(5000,()=>{
        console.log("server is running at port 5000");
    });
}).catch((error)=>{
    console.log(error);
})*/

server.listen(5000, ()=>{
            console.log("server running")
    mongoose.connect('mongodb://localhost:27017').then(()=>{
    console.log('connected to mongo');
    
}).catch((error)=>{
    console.log(error);
})
})


io.on("connection",(socket)=>{
    console.log(socket.id);

    socket.on("join_room",(data)=>{
        socket.join(data)
    })

    socket.on("send_data",(datas)=>{
        socket.to("ok").emit("receive_data",datas)
    })

    socket.on("disconnect",()=>{
        console.log(socket.id);
    })

    socket.on("predelete_data",(datas)=>{
        socket.to("ok").emit("delete_data",datas)
    })
    
})


//const authRoute = require('./routes/auth');
//const fournisseurRoute = require('./routes/fournisseur');
//const loginRoute = require('./routes/login');

/*const pool = mariadb.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'adema'
});*/



//app.use(cookieParser());

app.use("/",appareilRoute);
app.use("/",fournisseurRoute);
app.use("/",signup)
app.use("/",login)

//app.use("/",signUpRoute);
//app.use("/",loginRoute);

//app.all("*",(req,res) => res.send("cette route ne existe pas"))
//app.use(authRoute);
//app.use(fournisseurRoute);
//app.use(loginRoute);



/*app.get("/",(req,res)=>{
    if (req.session.name){
        return res.json({valid:true, name:req.session.name})
    } else {
        return res.json({valid:false})
    }
})*/

/*pool.getConnection((err,connection)=>{
if (err){
    if (err.code === 'PROTOCOL_CONNECTION_LOST'){
        console.log('Database connection lost');
    }
    if (err.code === 'ER_CON_COUNT_ERROR'){
        console.log('Database has too many connection');
    }
    if (err.code === 'ECONNREFUSED'){
        console.log('Database connection was refused');
    }
    if (connection) {connection.release()};
    return;
}
})*/

/*app.post('/', async (req,res) => {
    const { nomProduit, prix, nomFounisseur, description } = req.body;
    try {
        const conn = pool.getConnection();
        await conn.query("INSERT INTO appareil(name,prix,nom_fournisseur,description) VALUES(?,?,?,?)",{ nomProduit, prix, nomFounisseur, description })
    } catch (error) {
        console.log(error);
    }
});*/

//export default pool;