const express=require("express")
const app =express()
const port=39
const path=require("path")
const fs=require("fs")


// for serving static files
app.use("/static",express.static("static")) 


// pug specific stuff

app.set("view engine","pug")
app.set("views",path.join(__dirname, "views"))
app.get("/Delivery",(req,res)=>{
    res.status(200).render("Delivery",{title:"Fastest Delivery"})

})
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.post("/",(req,res)=>{
    const params={"message":"your form has been submitted successfully"}
    Name=req.body.Name;
    Phone = req.body.Phone
    Email=req.body.Email
    Message=req.body.Message
    
    content= `name is ${Name} , phone is ${Phone}, Email is ${Email}, Message is ${Message}`
    fs.writeFileSync("Contactus.txt",content)
    res.render("Delivery.pug",params)
})
app.post("/a",(req,res)=>{
    const params={"message":"your form has been submitted successfully"}
    name=req.body.name
    phone = req.body.phone
    email=req.body.email
    
    
    content= `name is ${name} , phone is ${phone}, Email is ${email}`
    fs.writeFileSync("PersonalInformation.txt",content)
    res.render("Delivery.pug",params)
})




app.listen(port,()=>{
    console.log(`The application started successfully on port ${port}`)
})
