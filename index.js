const express = require('express');
const app = express();
const port = 3000;
var router = express.Router();
// app.use(express.static(__dirname + "/public"))
app.use("/", express.static('public'))

app.set('view engine','pug');

// get home page
app.get('/', function(req, res) {
    res.render('index');
  });

// get to getData page
// app.get('/getData', function(req, res) {
//     res.render('data');
//   });

// get to getData page
/*app.get('/getData', function(req, res) {
  const number = req.query.number;
  if(typeof number === "undefined"){
    res.send("Lack of Parameter");
  }
  
  else if (typeof number === "number"){
    let sum = 0;
    for (let i = 0; i <= number; i++) {
      sum += i;}
    res.send(sum);

  }else {
    res.send("Wrong Parameter")
}
});*/
app.get('/getData', function(req, res) {

const number = req.query.number;

   if(typeof number !== "undefined"){

       // 用 Number 的這個方法先把字串轉成數值
       let ConverNum = Number(number);

       // 如果轉成數值後，該物件的型別是為數值 , 且為正整數的話 再做加總的動作
       if(typeof ConverNum === "number" && Number.isInteger(ConverNum)){

           let sum = 0;
           for (let i = 0; i <= number; i++) {
               sum += i;}
           res.send(sum.toString());

       }
       else{
           res.send("Wrong Parameter");
       }

   }
   else {
       res.send("Lack of Parameter");
   } 

  });

  
app.listen(port, () => console.log(`The app listening on localhost ${port}!`))