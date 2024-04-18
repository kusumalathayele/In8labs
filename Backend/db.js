
const sql=require("mysql")
const con=sql.createConnection({
    host:"localhost",
    user:"root",
    password:"Kusuma@123",
    database:"Fullstack"
})
con.connect(()=>{
    console.log("sql is connected")
})
module.exports=con
