const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");



// app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));

const filePath = path.join(__dirname, "public", "index.html");

console.log(filePath); 


let map = new Map();





app.get("/", (req, res) => {
    // res.send("hello from the home page");
    res.sendFile(filePath)
});


app.post("/", (req, res) => {
    const urlData = req.body;
    const { url, shortcut } = urlData;
    console.log(url, shortcut);

    map[url] = shortcut;



    console.log(map);
    console.log(map.size);


    res.send(`

        <div>

        <form action="/" method="POST">
        <label for="url">Enter URL to shorten:</label><br>
        <input type="url" id="url" name="url" required><br><br>

        <label for="shortcut">Enter shortcut (optional):</label><br>
        <input type="text" id="shortcut" name="shortcut"><br><br>

        <button type="submit">Shorten URL</button>
    </form>

    <h1>sortened urls here :</h1>

        </div>

         <div>
            <h1>Shortened URL</h1>
            <p>Original URL: ${url}</p>
            <div >
                <a href="${url}" target="_blank" style="text-decoration: none; color: black;">
                    Go to :: 
                     http://localhost:4000/${shortcut}
                </a>
            </div>
        </div>
        `);
})


app.get("/shorten", (req, res) => {
    const urlData = req.query;
    console.log(urlData);

})


app.post("/shorten", (req, res) => {
    const urlData = req.body;
    const { url, shortcut } = urlData;
    console.log(url, shortcut);

    fs.appendFile(dataStorage,)

    res.send(` <div>
            <h1>Shortened URL</h1>
            <p>Original URL: ${url}</p>
            <div >
                <a href="${url}" target="_blank" style="text-decoration: none; color: black;">
                    Go to :: 
                     http://localhost:4000/${shortcut}
                </a>
            </div>
        </div>
        `);
});





app.listen(4000, () => {
    console.log("server is listening at the port no ", 4000);
});

