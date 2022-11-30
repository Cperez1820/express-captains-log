const express = require('express')
const app = express()
const PORT = 3000


// 1	Index


// 2	Show				

// 3	New	
app.get('/new',(req,res)=>{
    res.render("/new")
})

// 4	Create	
// 5	Edit				
// 6	Update				
// 7	Destroy	







// APP LISTENER 
app.listen(PORT, ()=>{
    console.log(`Listening on port: ${PORT}`)
});