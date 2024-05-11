const path = require('path')

const express = require('express')
const app = express()

app.use(express.static('public'))

app.use('/', (req,res)=> {
    res.sendFile(path.join(__dirname,'static','index.html'))
})
    
const PORT = process.env.PORT || 8000
app.listen(PORT, () => console.log(`Listening to PORT ${PORT}`))