/* eslint-disable max-len */
const express = require('express');
const router = express.Router();
const { exam } = require('../database/models');
const { generalControllers } = require('../controllers/general.controller');

const { callbackErrorHandler } = require('../middleware/errorHandler');
const { validateExam, validateId } = require('../middleware/validationHandler');

const examController = generalControllers(exam);

router.get('/',
/* #swagger.tags = ["Exam"]
#swagger.responses[200] = {
  "description": "Get list of exams",
   "content": {
    "application/json": {
      "schema": {
        $ref: '#/components/schemas/examList'
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
*/ callbackErrorHandler(examController.getAll));
router.get('/:id',
/* #swagger.tags = ["Exam"]
#swagger.responses[200] = {
"description": "Get exam details",
  "content": {
        "application/json": {
          "schema": {
            $ref: '#/components/schemas/examDetails'
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
*/ validateId, callbackErrorHandler(examController.getOne));
router.post('/',
/* #swagger.tags = ["Exam"]
#swagger.parameters["exam_body"] = {
       "in": "body",
       "description": "Exam body example",
       "schema":{
           "name": "Mathematics",
           "date" : "2023-03-15",
           "course_id": "1"
       }
   }
#swagger.requestBody={
     "required": true,
     "content": {
       "application/json": {
         "schema": {
           $ref: '#/components/schemas/examBody'
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
*/ validateExam, callbackErrorHandler(examController.createItem));
router.put('/:id',
/* #swagger.tags = ['Exam']
#swagger.parameters["exam_body"] = {
       "in": "body",
       "description": "Exam body example",
        "schema":{
           "name": "Mathematics",
           "date" : "2023-03-15",
           "course_id": "1"
       }
   }
#swagger.requestBody={
     "required": true,
     "content": {
       "application/json": {
         "schema": {
           $ref: '#/components/schemas/examBody'
           }
         }
       }
     }
   }
      #swagger.responses[200] = {
        "description": 'Exam updated successfully',
       "content": {
        "application/json": {
          "schema": {
            $ref: '#/components/schemas/examDetails'
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
    */ validateId, validateExam, callbackErrorHandler(examController.updateItem));
router.delete('/:id',
/* #swagger.tags = ["Exam"]
#swagger.responses[204] = {
  "description": "Exam deleted successfully",
}
#swagger.responses[404] = {
  "description": "Invalid request sent",
 "schema": [
    {
      "message": "Item not found!"
    }
  ]
}
*/ validateId, callbackErrorHandler(examController.deleteItem));

module.exports = router;
