//arquivo typescript 

import express from 'express'; 

const app = express(); 

app.get('/users', (request, response) =>{
   response.json(['random names only for test']);  
}); 

app.listen(3333); //porta do servidor 