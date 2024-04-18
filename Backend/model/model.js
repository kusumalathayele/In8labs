

const con=require("../db.js")

// funton to get
function getAllUsers(callback) {
    con.query("SELECT * FROM Registration",(err,data)=>{
        if (err){
            callback(err, null)
            return
        }
        callback(null, data)
    })
}


// function to insert
const insertUser = (data,callback)=>{
    con.query("INSERT INTO Registration SET ?",data,(err,results)=>{
        if (err) {
            console.log(err)
            callback(err)
            return
        }
        console.log(results)
        callback(null, results)
    })
}

//function to update
const updateuser = (data, callback)=>{
    const { Name, Email, DateOfBirth, Id } = data
    con.query("UPDATE Registration SET Name = ?, Email = ?, DateOfBirth = ? WHERE id = ?", [Name,Email,DateOfBirth,Id],(err,results)=>{
        if(err){
            console.log(err)
            callback(err)
            return
        }
        console.log(results)
        callback(null, results)
    })
}

//function to delete 
const deleteUser = (Id,callback)=>{
    con.query("DELETE FROM Registration WHERE id = ?",[Id],(err,results)=>{
        if (err) {
            console.error('Error deleting user:', err);
            callback(err)
            return
        }
        console.log('User deleted successfully:', results)
        callback(null, results)
    })
}
module.exports = {
    getAllUsers,
    insertUser,
    updateuser,
    deleteUser
}
