const express = require('express');
const router = express.Router();
const { login } = require('../controllers/authentication.controller');
const { callbackErrorHandler } = require('../middleware/errorHandler');
const { validateAuthentication } = require('../middleware/validationHandler');

router.post('/',
/* #swagger.tags = ["Login"]
#swagger.parameters["login_body"] = {
       "in": "body",
       "description": "Login body example",
       "schema":{
           "email": "gasparov@gmail.com",
            "password": "test123"
       }
   }
#swagger.requestBody={
     "required": true,
     "content": {
       "application/json": {
         "schema": {
           $ref: '#/components/schemas/loginBody'
           }
         }
       }
     }
   }
   #swagger.responses[200] = {
     "description":"Successful Login",
        "schema": {
        "message": "Logged in"
        }
    }
    #swagger.responses[400] = {
        "description":"Unsuccessful Login",
        "schema": {
        "message": "Wrong Credential"
        }
    }
*/
  validateAuthentication, callbackErrorHandler(login));

module.exports = router;
