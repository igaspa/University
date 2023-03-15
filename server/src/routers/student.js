
// eslint-disable-next-line max-len
const { getAllStudents, getStudent, createStudent, updateStudent, deleteStudent } = require('../controllers/student');
const express = require('express');
const { callbackErrorHandler } = require('../middleware/errorHandler');
const { validateId, validateStudent } = require('../middleware/validationHandler');
const router = express.Router();

router.get('/', /* #swagger.tags = ["Student"]
#swagger.responses[200] = {
"description": "Get list of students",
   "content": {
    "application/json": {
      "schema": {
        $ref: '#/components/schemas/studentList'
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
*/ callbackErrorHandler(getAllStudents));
router.get('/:id',
/* #swagger.tags = ["Student"]
  #swagger.responses[200] = {
    "description": "Student details are displayed",
       "content": {
        "application/json": {
          "schema": {
            $ref: '#/components/schemas/studentDetails'
            }
        }
      }
    }
 #swagger.responses[400] = {
        "description": "Invalid request sent",
        "schema": {
          "message": "\"id\"must be a number"
        }
    }
  #swagger.responses[404] = {
        "description": "Invalid request sent",
        "schema": {
          "message": "Item not found"
        }
    }
*/ validateId, callbackErrorHandler(getStudent));
router.post('/'/* #swagger.tags = ["Student"]
#swagger.parameters["student_body"] = {
       in: "body",
       "description": "Student body example",
       "schema":{
           "first_name": "Samson",
           "last_name": "McSwan",
           "email": "smcswan8@blogtalkradio.com",
           "password": "jW3yXu9Gne9tpeCUPGwG50Hx5K6MYT17afgqLHJXq",
           "adress": "Apt 201",
           "phone_number": "309-120-1043",
           "major_id": 2
       }
   }
#swagger.requestBody={
     "required": true,
     "content": {
       "application/json": {
         "schema": {
           $ref: '#/components/schemas/studentBody'
           }
         }
       }
     }
   }
   #swagger.responses[201] = {
    "description": "Student created successfully",
      "content": {
       "application/json": {
         "schema": {
           $ref: '#/components/schemas/studentDetails'
           }
       }
     }
   }
   #swagger.responses[400] = {
       "description": "Invalid request sent",
        "content": {
       "application/json":{
       "schema": {
            $ref: '#/components/schemas/errorList'
        }
    }
}
   }
   */, validateStudent, callbackErrorHandler(createStudent));
router.put('/:id',
/* #swagger.tags = ["Student"]
 #swagger.parameters["student_body"] = {
        in: "body",
        "description": "Student body example",
        "schema": {
            "first_name": "Samson",
            "last_name": "McSwan",
            "email": "smcswan8@blogtalkradio.com",
            "password": "jW3yXu9Gne9tpeCUPGwG50Hx5K6MYT17afgqLHJXq",
            "adress": "Apt 201",
            "phone_number": "309-120-1043",
            "major_id": 2
        }
    }
    #swagger.requestBody={
     "required": true,
     "content": {
       "application/json": {
         "schema": {
           $ref: '#/components/schemas/studentBody'
           }
         }
       }
     }
   }
    #swagger.responses[200] = {
        "description": "Student updated successfully",
        "content": {
        "application/json": {
          "schema": {
            $ref: '#/components/schemas/studentDetails'
          }
        }
      }
    }
    #swagger.responses[400] = {
       "description": "Invalid request sent",
        "content": {
       "application/json":{
        "schema": {
                $ref: '#/components/schemas/errorList'
                }
            }
        }
    }
    #swagger.responses[404] = {
        "description": "Invalid request sent",
        "schema": {
          "message": "Item does not exist"
        }
    }
    */ validateId, validateStudent, callbackErrorHandler(updateStudent));
router.delete('/:id',
/* #swagger.tags = ["Student"]
    #swagger.responses[204] = {
        "description": "Student deleted successfully",
    }
    #swagger.responses[404] = {
        "description": "Invalid request sent",
        "schema": [{
            "message": "Item not found"
            }
        ]
    }
    #swagger.responses[404] = {
        "description": "Invalid request sent",
        "schema": [{
            "message": "\"id\" must be a number"
            }
        ]
    }
*/ validateId, callbackErrorHandler(deleteStudent));

module.exports = router;
