let express = require("express");
let path = require("path");

let app = express();
app.listen(3000, () => {
    console.log("Servidor corriendo en el puerto 3000");
});


app.use(express.static(path.join(__dirname, '/public')));

app.get("/", (req, res) =>{
    let fullPath = path.join(__dirname, "source/views/index.html");
    res.sendFile(fullPath);
});
app.get("/contactos", (req, res) =>{
    let fullPath = path.join(__dirname, "source/views/contact.html");
    res.sendFile(fullPath);
});
