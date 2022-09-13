const express = require('express');
const app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res) {
    const items = [
        {
            title: "D",
            message: "esenvolver aplicações/serviços de forma facil"
        },
        {
            title: "E",
            message: "JS usa JS para renderisar HTML"
        },
        {
            title: "M",
            message: "euito facil de usar"
        },
        {
            title: "A",
            message: "emorzinho"
        },
        {
            title: "I",
            message: "enstall EJS"
        },
        {
            title: "S",
            message: "eintexe smples"
        }
    ];

    const subtitle = "Uma linguagem de modelagem para criançao de JS"
    
    res.render('pages/index', {
        qualitys: items,
        subtitle: subtitle
    });
});

app.get("/sobre", function(req, res) {
    res.render('pages/about')
})

app.listen(8080)
console.log("Funciondo")