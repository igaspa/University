const express = require('express');
const router = express.Router();
const { enrollment } = require('../database/models');
const { generalControllers } = require('../controllers/general.controller');

const { callbackErrorHandler } = require('../middleware/errorHandler');
const { validateEnrollment, validateCompositeId } = require('../middleware/validationHandler');
const { getAllEnrollments, getEnrollment, deleteEnrollment } = require('../controllers/enrollment.controller');

const enrollmentController = generalControllers(enrollment);

router.get('/',
/* #swagger.tags = ["Enrollment"]
#swagger.responses[200] = {
  "description": "Get list of enrollments",
   "content": {
    "application/json": {
      "schema": {
        $ref: '#/components/schemas/enrollmentList'
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
*/ callbackErrorHandler(getAllEnrollments));
router.get('/:firstId/:secondId',
/* #swagger.tags = ["Enrollment"]
#swagger.responses[200] = {
"description": "Get enrollment details",
  "content": {
        "application/json": {
          "schema": {
            $ref: '#/components/schemas/enrollmentDetails'
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
*/ validateCompositeId, callbackErrorHandler(getEnrollment));
router.post('/',
/* #swagger.tags = ["Enrollment"]
#swagger.parameters["enrollment_body"] = {
       "in": "body",
       "description": "Enrollment body example",
       "schema":{
           "student_id": "1",
           "course_id" : "2",
       }
   }
#swagger.requestBody={
     "required": true,
     "content": {
       "application/json": {
         "schema": {
           $ref: '#/components/schemas/enrollmentBody'
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
*/ validateEnrollment, callbackErrorHandler(enrollmentController.createItem));
router.delete('/:firstId/:secondId',
/* #swagger.tags = ["Enrollment"]
#swagger.responses[204] = {
  "description": "Enrollment deleted successfully",
}
#swagger.responses[404] = {
  "description": "Invalid request sent",
 "schema": [
    {
      "message": "Item not found!"
    }
  ]
}
*/ validateCompositeId, callbackErrorHandler(deleteEnrollment));

module.exports = router;
