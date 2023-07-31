/*
var figlet = require("figlet");
figlet("Take Back", function (err, data) {
    if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
    }
    console.log(data);
});
*/
/*
const express = require('express')
const app = express()

app.get('/', function (req, res){
    res.send('Hello World');
} )
app.listen(3000)
*/

const express = require('express')
const app = express()
const port = 3000

app.listen(port, ()=> {
    // Call back 함수
    setTimeout(()=>{console.log("5초 지남")}, 5000)
    console.log((`Example app listening on port ${port}`))
})
app.get('/', (req, res)=> {
    res.send('Hello World!')
})
app.get('/dog',(req, res) => {
    res.send("강아지");
})
app.get('/cat',(req, res) => {
    res.send("고양이");
})
