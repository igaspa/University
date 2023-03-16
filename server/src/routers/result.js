/* eslint-disable max-len */
const express = require('express');
const router = express.Router();
const { callbackErrorHandler } = require('../middleware/errorHandler');
const { validateCompositeId, validateResult } = require('../middleware/validationHandler');
const { getAllResults, getResult, deleteResult, updateResult, createResult } = require('../controllers/result');
const { authenticateToken, verifyRoles } = require('../middleware/authentication');

router.get('/',
/* #swagger.tags = ["Result"]
#swagger.responses[200] = {
  "description": "Get list of results",
   "content": {
    "application/json": {
      "schema": {
        $ref: '#/components/schemas/resultList'
        }
    }
  }
}
#swagger.responses[404] = {
      "description": "Invalid request sent",
      "schema": {
        "message": "Item not found"
      }
    }
*/callbackErrorHandler(getAllResults));
router.get('/:firstId/:secondId',
/* #swagger.tags = ["Result"]
#swagger.responses[200] = {
"description": "Get result details",
  "content": {
        "application/json": {
          "schema": {
            $ref: '#/components/schemas/resultDetails'
            }
        }
    }
}
#swagger.responses[404] = {
   "description": "Invalid request sent",
      "schema": {
        "message": "Item not found"
      }
}
*/ validateCompositeId, callbackErrorHandler(authenticateToken), verifyRoles('student'), callbackErrorHandler(getResult));
router.post('/', /* #swagger.tags = ["Result"]
#swagger.parameters["result_body"] = {
       "in": "body",
       "description": "Result body example",
       "schema":{
            "grade": "5",
           "student_id": "1",
           "course_id" : "2",
       }
   }
#swagger.requestBody={
     "required": true,
     "content": {
       "application/json": {
         "schema": {
           $ref: '#/components/schemas/resultBody'
           }
         }
       }
     }
   }
  #swagger.responses[400] = {
  "description": 'Invalid request sent',
  "schema": {
    "message": [
        "student_id is required",
        "course_id is required"
    ]
  }
}
*/ validateResult, callbackErrorHandler(createResult));
router.put('/:firstId/:secondId',
/* #swagger.tags = ["Result"]
 #swagger.parameters["result_body"] = {
        in: "body",
        "description": "Result body example",
        "schema":{
           "grade": "5",
           "student_id": "1",
           "course_id" : "2",
       }
    }
    #swagger.requestBody={
     "required": true,
     "content": {
       "application/json": {
         "schema": {
           $ref: '#/components/schemas/resultBody'
           }
         }
       }
     }
   }
    #swagger.responses[200] = {
        "description": "Result updated successfully",
        "content": {
        "application/json": {
          "schema": {
            $ref: '#/components/schemas/resultDetails'
          }
        }
      }
    }
    #swagger.responses[400] = {
        "description": "Invalid request sent",
        "schema": {
           "message":[
            "grade is required",
            "student_id is required",
            "exam_id is required"
        ]}
    }
    #swagger.responses[404] = {
        "description": "Invalid request sent",
        "schema": {
          "message": "Item does not exist"
        }
    }
    */ validateCompositeId, validateResult, callbackErrorHandler(authenticateToken), verifyRoles('professor'), callbackErrorHandler(updateResult));
router.delete('/:firstId/:secondId',
/* #swagger.tags = ["Result"]
#swagger.responses[204] = {
  "description": "Result deleted successfully",
}
#swagger.responses[404] = {
  "description": "Invalid request sent",
 "schema": [
    {
      "message": "Item not found!"
    }
  ]
}
*/validateCompositeId, callbackErrorHandler(deleteResult));

module.exports = router;
