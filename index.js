const express = require('express');
const app = express();
const cors = require('cors')

const port = 80;


app.use(cors())

app.use(express.json())


app.get('/',(req,res)=>{
	console.log('get Request')
})


app.post('/',(req,res)=>{
	console.log('Hello World')
	console.log(req.params,"params")
	console.log(req.query,"query")
	console.log(res.body, "body")  // Undefine
	console.log(res, "all") // giving all the data
})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});