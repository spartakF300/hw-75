const express = require('express');
const cors = require('cors');
const Vigenere = require('caesar-salad').Vigenere;
const app = express();
const port = 8000;
app.use(cors());
app.use(express.json());
app.post('/encode', (req,res)=>{
    const encodedText =  Vigenere.Cipher(req.body.password).crypt(req.body.message);
    res.header('Content-Type', 'text/plain');
    res.send({encoded:encodedText})

});
app.post('/decode', (req,res)=>{
    const decodedText =  Vigenere.Decipher(req.body.password).crypt(req.body.message);
    res.header('Content-Type', 'text/plain');
    res.send({decoded:decodedText} )

});
app.listen(port,()=>{
    console.log('server run '+ port)
});
