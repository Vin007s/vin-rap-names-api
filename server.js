const express = require('express')
const app = express()
const PORT = 8000

const rappers ={
    '21 savage': {
    'age': 29,
    'birthName': 'Sheyaa Bin',
    'birthLocation': 'London, England'    
},
    'Chance the Rapper':{
        'age': 29,
        'birthName': 'Cencelor',
        'birthLocation': 'Chicago'
    },
    'Unknown' : {
        'age' : 0,
        'birthName' : 'Unknown',
        'birthLocation': 'Unknown'
       }
}

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html')
})
app.get('/api', (req,res)=> {
    res.json(rappers)  
})
app.get('/api/:name', (req,res)=> {
    const rapperName = req.params.name.toLowerCase()
    if(rappers[rapperName]){
        res.json(rappers[rapperName]) 
   } else{
    res.json(rappers['Unknown'])
   }
})
    
   


app.listen(PORT, ()=>{
    console.log(`The Server is now running on port ${PORT}! Betta Go Catch It!`)
})