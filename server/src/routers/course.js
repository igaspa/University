const express = require('express');
const router = express.Router();
const { getAllCourses, getCourse, createCourse, updateCourse, deleteCourse } = require('../controllers/course');
const { callbackErrorHandler } = require('../middleware/errorHandler');
const { validateCourse, validateId } = require('../middleware/validationHandler');

router.get('/',
/* #swagger.tags = ["Course"]
#swagger.responses[200] = {
  "description": "Get list of courses",
   "content": {
    "application/json": {
      "schema": {
        $ref: '#/components/schemas/courseList'
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
*/ callbackErrorHandler(getAllCourses));
router.get('/:id',
/* #swagger.tags = ["Course"]
#swagger.responses[200] = {
"description": "Get course details",
  "content": {
        "application/json": {
          "schema": {
            $ref: '#/components/schemas/courseDetails'
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
*/ validateId, callbackErrorHandler(getCourse));
router.post('/',
/* #swagger.tags = ["Course"]
#swagger.parameters["course_body"] = {
       "in": "body",
       "description": "Course body example",
       "schema":{
           "name": "Mathematics",
           "credit_hours" : "2",
           "major_id": "1"
       }
   }
#swagger.requestBody={
     "required": true,
     "content": {
       "application/json": {
         "schema": {
           $ref: '#/components/schemas/courseBody'
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
*/validateCourse, callbackErrorHandler(createCourse));
router.put('/:id',
/* #swagger.tags = ['Course']
#swagger.parameters["course_body"] = {
       "in": "body",
       "description": "Course body example",
       "schema":{
           "name": "Mathematics",
           "credit_hours":"2",
           "major_id": "1"
       }
   }
#swagger.requestBody={
     "required": true,
     "content": {
       "application/json": {
         "schema": {
           $ref: '#/components/schemas/courseBody'
           }
         }
       }
     }
   }
      #swagger.responses[200] = {
        "description": 'Course updated successfully',
       "content": {
        "application/json": {
          "schema": {
            $ref: '#/components/schemas/courseDetails'
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
    */ validateId, validateCourse, callbackErrorHandler(updateCourse));
router.delete('/:id',
/* #swagger.tags = ["Course"]
#swagger.responses[204] = {
  "description": "Course deleted successfully",
}
#swagger.responses[404] = {
  "description": "Invalid request sent",
 "schema": [
    {
      "message": "Item not found!"
    }
  ]
}
*/ validateId, callbackErrorHandler(deleteCourse));

module.exports = router;
