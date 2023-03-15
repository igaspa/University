/* eslint-disable max-len */
const express = require('express');
const router = express.Router();
const { getAllExams, getExam, createExam, updateExam, deleteExam } = require('../controllers/exam');
const { callbackErrorHandler } = require('../middleware/errorHandler');
const { validateExam, validateId } = require('../middleware/validationHandler');

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
*/ callbackErrorHandler(getAllExams));
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
*/ validateId, callbackErrorHandler(getExam));
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
*/ validateExam, callbackErrorHandler(createExam));
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
    */ validateId, validateExam, callbackErrorHandler(updateExam));
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
*/ validateId, callbackErrorHandler(deleteExam));

module.exports = router;
