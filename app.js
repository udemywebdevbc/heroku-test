var express = require('express');
const PORT = process.env.PORT || 3000;

var app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
    // res.send(
    //             `<center><h1>This is my first express app!!</h1></center>
    //              <br><center><h1>It\'s pretty cool right</center></h1>`    
    //         );
});

app.listen(PORT, () => {
    console.log(`SERVER RUNNING ON PORT ${PORT}`);
});
