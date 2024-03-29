const express = require('express');
const router = express.Router();
const { getAllMajors, getMajor, createMajor, updateMajor, deleteMajor } = require('../controllers/major');
const { callbackErrorHandler } = require('../middleware/errorHandler');
const { validateId, validateMajor } = require('../middleware/validationHandler.js');

router.get('/', /* #swagger.tags = ["Major"]
#swagger.responses[200] = {
  "description": "Get list of majors",
   "content": {
    "application/json": {
      "schema": {
        $ref: '#/components/schemas/majorList'
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
*/ callbackErrorHandler(getAllMajors));
router.get('/:id', /* #swagger.tags = ["Major"]
#swagger.responses[200] = {
"description": "Get major details",
  "content": {
        "application/json": {
          "schema": {
            $ref: '#/components/schemas/majorDetails'
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
*/ validateId, callbackErrorHandler(getMajor));
router.post('/', /* #swagger.tags = ["Major"]
#swagger.parameters["major_body"] = {
       "in": "body",
       "description": "Major body example",
       "schema":{
           "name": "Mathematics",
       }
   }
#swagger.requestBody={
     "required": true,
     "content": {
       "application/json": {
         "schema": {
           $ref: '#/components/schemas/majorBody'
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
*/ validateMajor, callbackErrorHandler(createMajor));
router.put('/:id', validateId, validateMajor, callbackErrorHandler(updateMajor)
/* #swagger.tags = ['Major']
#swagger.parameters["major_body"] = {
       "in": "body",
       "description": "Major body example",
       "schema":{
           "name": "Mathematics",
       }
   }
#swagger.requestBody={
     "required": true,
     "content": {
       "application/json": {
         "schema": {
           $ref: '#/components/schemas/majorBody'
           }
         }
       }
     }
   }
      #swagger.responses[200] = {
        "description": 'Major updated successfully',
       "content": {
        "application/json": {
          "schema": {
            $ref: '#/components/schemas/majorDetails'
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
    */);
router.delete('/:id', validateId, callbackErrorHandler(deleteMajor)
/* #swagger.tags = ["Major"]
    #swagger.responses[204] = {
      "description": "Major deleted successfully",
    }
    #swagger.responses[404] = {
      "description": "Invalid request sent",
     "schema": [
        {
          "message": "Item not found!"
        }
      ]
    }
*/);

module.exports = router;
