var userService = require('./userService');



var getDataControllerfn = async(req, res) =>
{
    var doctor =await userService.getDataFromDBService();
    res.send({"status": true, "data": doctor});
}

var createUserControllerFn = async (req, res) =>
{
   
    console.log(req.body);
    var status = await userService.createUserDBService(req.body);
    console.log("***************");
    console.log("status");
    console.log("***************");

    if (status) {
        res.send({"status": true, "Message" : "User crested successfully"});
    } else {
        res.send({"status": false, "Message" : "error creating user"});
    }
}

 
 
 
var updateUserController = async (req, res) =>
{
    console.log(req.body);
    
    var result = await userService.updateUserDBService(req.body);
 
     if (result) {
        res.send({ "status": true, "message": "User Updateeeedddddd"} );
     } else {
         res.send({ "status": false, "message": "User Updateeeedddddd Faileddddddd" });
     }
}

var deleteUserController = async (req, res) =>
{
     var result = await userService.deleteUserDBService({_id:req.body._id});
     if (result) {
        res.send({ "status": true, "message": "User Deleteddd"} );
     } else {
         res.send({ "status": false, "message": "User Deleteddd Faileddddddd" });
     }
}


module.exports= { getDataControllerfn, createUserControllerFn,updateUserController,deleteUserController};