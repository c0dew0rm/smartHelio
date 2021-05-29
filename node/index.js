var express = require("express");
var mysql = require('mysql');
const cors = require('cors');

var connection = mysql.createConnection({
  host: 'AWS-RDS endpoint',
  port:  '3306',
  user: 'AWS-RDS INSTANCE USERNAME',
  password: 'PASSWORD FOR DB INSTANCE',
  database: 'DB NAME'
});

var app = express();
app.use(
  express.urlencoded({
    extended: true
  })
);
app.use(express.json());

const router = express.Router();
app.use(cors());

app.use('/api',router);

connection.connect(function(err){
  if(!err) {
    console.log("Database is connected ... ");    
  } else {
    console.log("Error connecting database ... ");    
  }
});


router.post('/getData', (req, res) => {
  const sensorId = req.body.sensorId;
  const startDate = req.body.startDate;
  const endDate = req.body.endDate;
  try {
    connection.query(`SELECT *,(Current*Voltage) as Power FROM deviceData where timeStamp >= ${startDate} and timeStamp<= ${endDate} and sensorId = ${sensorId}`, function (err, result, fields) {
      console.log(result);
      res.status(200).send(result).end();
    });
  } catch(err) {
    console.log(err);
  }
});

router.get('/getAllDevice', (req, res) => {
  try {
    connection.query("SELECT DISTINCT sensorId FROM deviceData", function (err, result, fields) {
      if (err) throw err;
      res.status(200).send(result).end();
    });
  } catch(err) {
    console.log(err);
  }
});

const server = app.listen(4040, () => {
  let port = server.address().port;
  console.log(`${new Date()}:  Info = Server started, listening on port ${port}`);
});