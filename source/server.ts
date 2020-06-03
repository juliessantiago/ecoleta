//arquivo typescript 

import express from 'express'; 

const app = express(); 

app.get('/users', (request, response) =>{
   response.json(['Amanda', 'Pedro', 'Carlos', 'Julie']) 
}); 

app.listen(3333); 