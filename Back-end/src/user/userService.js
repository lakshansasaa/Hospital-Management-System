var userModel = require('./userModel');
 
module.exports.getDataFromDBService = () => {
 
    return new Promise(function checkURL(resolve, reject) {
        userModel.find({}, function returnData(error, result) {
            if (error) {
                reject(false);
            } else {
        
                resolve(result);
            }
        });
    });
}
 
module.exports.createUserDBService = (userDetails) => {
 
 
    return new Promise(async function myFn(resolve, reject) {
        var userModelData = new userModel();
        userModelData._id = userDetails._id;
        userModelData.name = userDetails.name;
        userModelData.address = userDetails.address;
        userModelData.phone = userDetails.phone; 
        await userModelData.save(function resultHandle(error, result) {
            if (error) {
                reject(false);
            } else {
                resolve(true);
            }
        });
    });
}
 
module.exports.updateUserDBService = (body) => {    
    console.log(body);
    return new Promise(function myFn(resolve, reject) {
        userModel.updateOne({_id: body._id},{name: body.name, address: body.address, phone: body.phone}, function returnData(error, result) {
          if(error)
          {
                reject(false);
          }
          else
          {
             resolve(result);
          }
        });
    });
}
 
module.exports.deleteUserDBService = (id) => {
    return new Promise(function myFn(resolve, reject) {
        userModel.deleteOne({id}, function returnData(error, result) {
          if(error)
          {
                reject(false);
          }
          else
          {
             resolve(result);
          }          
        });
    });
}
