const express = require('express');
const router = express.Router();
const { department } = require('../database/models');
const { generalControllers } = require('../controllers/general.controller');

const { callbackErrorHandler } = require('../middleware/errorHandler');
const { validateId, validateDepartment } = require('../middleware/validationHandler');

const departmentController = generalControllers(department);

router.get('/', /* #swagger.tags = ["Department"]
#swagger.responses[200] = {
  "description": "Get list of departments",
   "content": {
    "application/json": {
      "schema": {
        $ref: '#/components/schemas/departmentList'
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
*/ callbackErrorHandler(departmentController.getAll));
router.get('/:id', /* #swagger.tags = ["Department"]
#swagger.responses[200] = {
"description": "Get department details",
  "content": {
        "application/json": {
          "schema": {
            $ref: '#/components/schemas/departmentDetails'
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
*/ validateId, callbackErrorHandler(departmentController.getOne));
router.post('/', /* #swagger.tags = ["Department"]
#swagger.parameters["department_body"] = {
       "in": "body",
       "description": "Department body example",
       "schema":{
           "name": "Mathematics",
           "major_id": "1"
       }
   }
#swagger.requestBody={
     "required": true,
     "content": {
       "application/json": {
         "schema": {
           $ref: '#/components/schemas/departmentBody'
           }
         }
       }
     }
   }
  #swagger.responses[400] = {
  "description": 'Invalid request sent',
  "schema": {
    "message": "name is required"
  }
}
*/validateDepartment, callbackErrorHandler(departmentController.createItem));
router.put('/:id', /* #swagger.tags = ['Department']
#swagger.parameters["department_body"] = {
       "in": "body",
       "description": "Department body example",
       "schema":{
           "name": "Mathematics",
           "major_id": "1"
       }
   }
#swagger.requestBody={
     "required": true,
     "content": {
       "application/json": {
         "schema": {
           $ref: '#/components/schemas/departmentBody'
           }
         }
       }
     }
   }
      #swagger.responses[200] = {
        "description": 'Department updated successfully',
       "content": {
        "application/json": {
          "schema": {
            $ref: '#/components/schemas/departmentDetails'
          }
        }
      }}
        #swagger.responses[400] = {
        "description": 'Invalid request sent',
        "schema": {
          "message": "name is required"
        }
      }
      #swagger.responses[404] = {
        "description": "Invalid request sent",
        "schema": {
          "message": "Item not found"
        }
      }
    */ validateId, validateDepartment, callbackErrorHandler(departmentController.updateItem));
router.delete('/:id', /* #swagger.tags = ["Department"]
#swagger.responses[204] = {
  "description": "Department deleted successfully",
}
#swagger.responses[404] = {
  "description": "Invalid request sent",
 "schema": [
    {
      "message": "Item not found!"
    }
  ]
}
*/ validateId, callbackErrorHandler(departmentController.deleteItem));

module.exports = router;
