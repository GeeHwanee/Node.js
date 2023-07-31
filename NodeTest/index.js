
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
/*
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
app.get('/sound',(req, res) => {
    res.json({'sound':'멍멍'});
})
*/
// axios -> express 
// axios로 보내고 express로 받은 요청에 대한 응답

/*
const express = require('express')
const app = express()
const port = 3000
app.listen(port, ()=> {
    // Call back 함수
    setTimeout(()=>{console.log("5초 지남")}, 5000)
    console.log((`Example app listening on port ${port}`))
})
app.get('/user/:id',(req, res) => {
    const q = req.params
    console.log(q)
    res.send(q)
})
*/

// GET/sound/:name => name 따라서 다른 울음소리 반환
const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')

//app.use(cors())
app.listen(port, ()=> {
    // Call back 함수
    setTimeout(()=>{console.log("5초 지남")}, 5000)
    console.log((`Example app listening on port ${port}`))
})
app.get('/',(req, res)=>{

})
app.get('/sound/:name',(req, res) => {
    const { name } = req.params
    console.log(name)
    if (name =="dog"){
        res.json({'sound':'멍멍'})
    }else if (name == "cat"){
        res.json({'sound':'야옹'})
    }else if (name == "pig"){
        res.json({'sound':'꿀꿀'})
    }else{
        res.json({'sound':'알수 없음'})
    }
})
