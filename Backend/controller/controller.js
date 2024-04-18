


var userModel = require("../model/model.js")

// Function to fetch data
function getDatabase(req, res) {
    userModel.getAllUsers((err,data)=>{
        if (err){
            console.log(err)
            res.status(500).send("Error retrieving data from database")
        } else {
            res.send(data)
            console.log(data)
        }
    })
}

// function to insert
const insertData = (req, res) => {
    const { Id, Name, Email, DateOfBirth } = req.body
    if (!Id || !Name || !Email || !DateOfBirth) {
        return res.status(400).json({ error: 'Missing required fields' })
    }
    userModel.insertUser({ Id, Name, Email, DateOfBirth},(err,results)=>{
        if (err){
            console.error('Error inserting table data:', err)
            return res.status(500).json({ error: 'Internal server error' })
        }
        console.log(results)
        res.json(results)
    })
}
//function to update

const updatedata = (req, res) => {
    const { Id, Name, Email, DateOfBirth } = req.body;
    if (!Id) {
        return res.status(400).json({ error: 'Missing required fields' });
    }
    const updatedFields = { Id };
    if (Name) updatedFields.Name = Name;
    if (Email) updatedFields.Email = Email;
    if (DateOfBirth) updatedFields.DateOfBirth = DateOfBirth;

    userModel.updateuser(updatedFields, (err, results) => {
        if (err) {
            console.error('Error updating table data:', err);
            return res.status(500).json({ error: 'Internal server error' });
        }
        console.log(results);
        res.json(results);
    });
};

// function to delete
const deleteData = (req, res) => {
    const { Id } = req.body;
    console.log('Deleting user with Id:', Id);
    userModel.deleteUser(Id, (err, results) => {
        if (err) {
            console.error('Error deleting data:', err);
            return res.status(500).json({ error: 'Internal server error' });
        }
        console.log(results);
        res.json(results);
    })
}


module.exports = {
    getDatabase,
    insertData,
    updatedata,
    deleteData
}

