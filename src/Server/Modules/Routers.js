const Router = require("express").Router();
const MongoClient = require("mongodb").MongoClient;

Router.post("/api/v1/addUser", (req, res) => { 
    addUser(req.body).then(e => {
        res.send({
            type: "info",
            message: e
        });
    });
});
Router.post("/api/v1/getUsers", (req, res) => {
    
});


exports.Router = Router;





// This Functions Checks And Adds The User In The Database

const addUser = async (document) => {
    const conn = await MongoClient.connect("mongodb://localhost:27017/ReduxTodoApp", { useUnifiedTopology: true });
    const db = conn.db("ReduxTodoApp");
    const userCollection = db.collection("Users");
    const isValid = checkDoc(document);
    if (!isValid) {
        return `<span style="color: red;">Please Fill All The Fields !</span>`;
    }
    else if (await userCollection.findOne({ User_userName: document.currUserName }) !== null) {
        return `<span style="color: red;">Sorry Username Already Taken !</span>`;
    };
    console.log(await userCollection.findOne({ User_userName: document.currUserName }));
    userCollection.insertOne({
        User_Name: document.currFullName,
        User_userName: document.currUserName,
        User_Password: document.currPassword,
        IsLoggedIn: true
    }, (err) => err);
    
    return `<span style="color: green;">User Added Sucessfully</span>`;
}


// This Function Checks The Document For Unwanted Fields

function checkDoc(doc) {
    if (doc.currFullName == "" || doc.currUserName == "" || doc.currPassword == "") {
        return false;
    }
    else if (doc.currFullName == "Unset" || doc.currUserName == "Unset" || doc.currPassword == "Unset") {
        return false;
    }
    return true;    
}
