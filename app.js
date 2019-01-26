var express = require("express");
var app = express();
var request = require("request");
app.set("view engine", "ejs");

app.get("/results", function(req, res) {
    var searchTerm = req.query.search;
    var url = "http://www.omdbapi.com/?s="+searchTerm+"&apikey=thewdb"
    request(url, function(err, response, body){
        if(!err && response.statusCode == 200){
            var data = JSON.parse(body);
            // res.send(parsedData["Search"][0]);
            res.render("results", {data :data});
        }
    });
});
app.get("/search", function(req, res) {
    res.render("search");
});
app.get("*", function(req, res){
    res.send("Page Not Found");
});
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("MOVIE API server has started");
});