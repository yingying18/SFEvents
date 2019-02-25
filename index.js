const express = require('express')
const app = express()
const port = 3000
app.use(express.static('public'))
app.get('/', (req, res) => {
  res.sendFile(__dirname+'/public/index.html')
  }
)
app.get('/ben', (req, res) => {
  res.sendFile(__dirname+'/public/Ben/index.html')
  }
)
app.get('/david', (req, res) => {
  res.sendFile(__dirname+'/public/david/index.html')
  }
)
app.get('/tejal', (req, res) => {
  res.sendFile(__dirname+'/public/Tejal/index.html')
  }
)
app.get('/wenying', (req, res) => {
  res.sendFile(__dirname+'/public/Wenying/index.html')
  }
)
app.get('/yujin', (req, res) => {
  res.sendFile(__dirname+'/public/yujin/index.html')
  }
)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
