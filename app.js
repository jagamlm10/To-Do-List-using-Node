// Requiring all the modules

const express = require("express");
const bodyParser = require("body-parser")
const date = require(__dirname+"/date.js")
const app = express()


// Declaring list arrays

const items = ["Eat","Sleep","Code","Repeat"];
const workItems = [];


// Setting-Up middleware functions

app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"))


// Setting-Up get requests on different routes

app.get("/",function(req,res){
    var day = date.getDate();
    res.render('list',{ listTitle : day, newListItems : items});
});
app.get("/Work",function(req,res){
    res.render("list",{ listTitle : "Work List",newListItems : workItems });
})
app.get("/about",function(req,res){
    res.render("about");
})


// Setting-Up post request on different routes

app.post("/",function(req,res){
    let item = req.body.newItem;
    if (req.body.list === "Work List"){
        workItems.push(item);
        res.redirect("/work");
    }else{
        items.push(item);
        res.redirect("/");
    }
})
app.post("/Work",function(req,res){
    let work = req.body.newItem;
    workItems.push(work);
    res.redirect("/Work");
})


// Starting server at port 3000

app.listen(3000,function(){
    console.log("Server running on port 3000.");
});

