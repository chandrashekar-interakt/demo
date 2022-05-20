const express = require('express')
const app = express()
const port = 2500

app.get('/', (req, res) => {
    res.send('helloworld')
})


app.listen(port, () => {
    console.log('my server is running on port ')
})