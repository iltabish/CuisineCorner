const  express = require('express')
const path=require('path');
require("./db/conn");
const Register=require("./models/register");
const app = express()
const port = 3004

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname, 'public')))

app.get('/',(req,res)=>{
  res.sendFile(path.join(__dirname,'/templates/hello.html'))
})

app.get('/services',(req,res)=>{
res.sendFile(path.join(__dirname,'/templates/services.html'))
 })

app.get('/about',(req,res)=>{
    res.sendFile(path.join(__dirname,'/templates/about.html'))
     })

app.get('/contact',(req,res)=>{
        res.sendFile(path.join(__dirname,'/templates/contact.html'))
         })

         app.post("/contact",async(req,res)=>{
          try {
              const registerStudent=new Register(req.body);
             const registered=await registerStudent.save();
             res.status(201).sendFile(path.join(__dirname,'/templates/hello.html'));
          } catch (error) {
            console.error(error);
              res.status(400).send("OOPserror");
          }
      });
            
        
app.listen(port,  () => {
            console.log(`Blog app listening at http://localhost:${port}`);
          })
 