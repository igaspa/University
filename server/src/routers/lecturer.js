const express = require('express');
const { getAllLecturers, getLecturer, deleteLecturer, createLecturer } = require('../controllers/lecturers');
const router = express.Router();
const { callbackErrorHandler } = require('../middleware/errorHandler');
const { validateLecturer, validateCompositeId } = require('../middleware/validationHandler');

router.get('/',
/* #swagger.tags = ["Lecturer"]
#swagger.responses[200] = {
  "description": "Get list of lecturers",
   "content": {
    "application/json": {
      "schema": {
        $ref: '#/components/schemas/lecturerList'
        }
    }
  }
}
    #swagger.responses[404] = {
  "description": "Invalid request sent",
 "schema": [
    {
      "message": "Item not found!"
    }
  ]
}
*/ callbackErrorHandler(getAllLecturers));
router.get('/:firstId/:secondId',
/* #swagger.tags = ["Lecturer"]
#swagger.responses[200] = {
"description": "Get lecturer details",
  "content": {
        "application/json": {
          "schema": {
            $ref: '#/components/schemas/lecturerDetails'
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
#swagger.responses[400] = {
      "description": "Invalid request sent",
      "schema": {
        "message": [
        "firstId must be a number",
        "secondId must be a number"
        ]
      }
    }
*/ validateCompositeId, callbackErrorHandler(getLecturer));
router.get('/:firstId/:secondId',
/* #swagger.tags = ["Lecturer"]
#swagger.responses[200] = {
"description": "Get lecturer details",
  "content": {
        "application/json": {
          "schema": {
            $ref: '#/components/schemas/lecturerDetails'
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
#swagger.responses[400] = {
      "description": "Invalid request sent",
      "schema": {
        "message": [
        "firstId must be a number",
        "secondId must be a number"
        ]
      }
    }
*/ validateCompositeId, callbackErrorHandler(getLecturer));
router.post('/',
/* #swagger.tags = ["Lecturer"]
#swagger.parameters["lecturer_body"] = {
       "in": "body",
       "description": "Lecturer body example",
       "schema":{
           "professor_id": "1",
           "course_id" : "2",
       }
   }
#swagger.requestBody={
     "required": true,
     "content": {
       "application/json": {
         "schema": {
           $ref: '#/components/schemas/lecturerDetails'
           }
         }
       }
     }
   }
  #swagger.responses[400] = {
  "description": 'Invalid request sent',
  "schema": {
    "message": [
        "professor_id is required",
        "course_id is required"
    ]
  }
}
*/ validateLecturer, callbackErrorHandler(createLecturer));
router.delete('/:firstId/:secondId',
/* #swagger.tags = ["Lecturer"]
#swagger.responses[204] = {
  "description": "Lecturer deleted successfully",
}
#swagger.responses[404] = {
  "description": "Invalid request sent",
 "schema": [
    {
      "message": "Item not found!"
    }
  ]
}
#swagger.responses[400] = {
      "description": "Invalid request sent",
      "schema": {
        "message": [
        "firstId must be a number",
        "secondId must be a number"
        ]
      }
    }
*/ validateCompositeId, callbackErrorHandler(deleteLecturer));

module.exports = router;
