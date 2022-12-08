const express = require("express")
const app = express()
const cors = require('cors')
const port = 8000
const db = require('../config/database')

const karyawan = db.collection("karyawan")

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.listen(port, () => {
    console.log("Listening to port 8000...")
})

app.get("/link", async(req, res) => {
    try {
        let links = []
        karyawan.get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                let id = doc.id
                links.push({id, ...doc.data()})
            })
            res.send(links)
        })
    }
    catch(err) {
        console.log(err)
    }
})

app.post("/api/post", async(req,res) => {
    await karyawan.add({
        url: req.body.url,
        alias: req.body.alias,
        visits: 0
    })
    res.send({
        message: "Data berhasil ditambahkan"
    })
})