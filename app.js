import express from 'express'

const app = express()
const PORT = 5000

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`)
})


// Add this to the bottom of app.js
app.get('/api/v1/add', (req, res) => {
    const { first = 0, second = 0 } = req.query
    const total = parseInt(first) + parseInt(second)
    res.status(200).send({
        success: 'true',
        total
    })
})