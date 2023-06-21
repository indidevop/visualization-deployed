const connectToMongo=require('./db')
const cors=require('cors')
connectToMongo();
const express=require('express')
const app=express()
require('dotenv').config();
const port=process.env.PORT||5000


app.use(cors(corsOptions));
app.use(express.json())

const corsOptions = {
  origin: "http://localhost:3000" // frontend URI (ReactJS)
}


app.use('/',require('./routes/getdata'))
app.use((req, res) => {
    res.status(404).send("Page not found");
  });

app.listen(port,()=>{
    console.log(`Listening on port: ${port}`);
})

