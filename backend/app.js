let express = require("express");
let app = express();
let ejs = require("ejs");
let pdf = require("html-pdf");
let path = require("path");
const cors = require('cors')
const { v4: uuidv4 } = require("uuid");
app.use(express.json({limit: '100mb', extended: true}))
const fs = require('fs')
app.use(cors())
app.use(express.static(path.join(__dirname, './public')))







app.post("/generateResume", (req, res) => {
    
    const {name,about,image,skills,languages,hobbies,phone,email,experiences} = req.body
    const {fontFamily, fontStyle} = req.body.fontState
    const {color,theme} = req.body.bannerState



    let id=uuidv4()
    ejs.renderFile(path.join(__dirname, './views/', "report-template.ejs"), {experiences,name,color,image,phone,theme,email,skills,languages,hobbies, fontFamily, fontStyle, about}, (err, data) => {
    if (err) {
          res.send(err);
    } else {
        var options = {
            "format": "A4",
            "orientation": "portrait",
             base: `${req.protocol}://${req.get('host')}`,
   };
        pdf.create(data, options).toFile(`${id}.pdf`, function (err, data) {
            if (err) {
                res.send(err);
            } else {
                res.download(`./${id}.pdf`,(err)=>{
                    if (err) {
                        console.log(err); // Check error if you want
                      }
                      fs.unlink(`./${id}.pdf`, function(){
                          console.log("File was deleted") // Callback
                    });
                })
             
               
            }
        });

       
    }
})


})
app.listen(5000);