const express = require('express');
const router = express.Router();
// eslint-disable-next-line max-len
const { getAllProfessors, getProfessor, createProfessor, updateProfessor, deleteProfessor } = require('../controllers/professor');
const { callbackErrorHandler } = require('../middleware/errorHandler.js');
const { validateId, validateProfessor } = require('../middleware/validationHandler.js');

router.get('/'
/* #swagger.tags = ["Professor"]
        #swagger.responses[200] = {
            "content": {
        "application/json": {
        "schema": {
            $ref: '#/components/schemas/professorList'
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
*/, callbackErrorHandler(getAllProfessors));
router.get('/:id', /* #swagger.tags = ["Professor"]
#swagger.responses[200] = {
  "description": "Professor details are displayed",
  "content": {
   "application/json": {
     "schema": {
       $ref: '#/components/schemas/professorDetails'
       }
   }
}
}
#swaggerer.responses[400] = {
   "description": "Invalid request sent",
   "schema": {
     "message": "\"id\" must be a number"
   }
}
#swagger.responses[404] = {
   "description": "Invalid request sent",
   "schema": {
     "message": "Item not found"
   }
}
*/ validateId, callbackErrorHandler(getProfessor));
router.post('/',
/* #swagger.tags = ["Professor"]
 #swagger.parameters["professor_body"] = {
        in: "body",
        "description": "Professor body example",
        "schema": {
            "first_name": "Samson",
            "last_name": "McSwan",
            "email": "smcswan8@blogtalkradio.com",
            "password": "jW3yXu9Gne9tpeCUPGwG50Hx5K6MYT17afgqLHJXq",
            "adress": "Apt 201",
            "phone_number": "309-120-1043",
            "department_id": 2
    }
}
    #swagger.requestBody={
     "required": true,
     "content": {
       "application/json": {
         "schema": {
           $ref: '#/components/schemas/professorBody'
           }
         }
       }
     }
   }
    #swagger.responses[201] = {
        "description": "Professor created successfully",
        "content": {
        "application/json": {
          "schema": {
           $ref: '#/components/schemas/professorDetails'
            }
        }
      }
    }
    #swagger.responses[400] = {
        "description": "Invalid request sent",
        "schema": {
          "message":[
            "first_name is required",
            "last_name is required",
            "email is required",
            "password is required",
            "adress is required",
            "phone_number is required",
            "department_id is required",
            "Item has to be unique"

        ]}
    }
    */ validateProfessor, callbackErrorHandler(createProfessor));
router.put('/:id', /* #swagger.tags = ["Professor"]
#swagger.parameters["professor_body"] = {
       in: "body",
       "description": "Professor body example",
       "schema": {
           "first_name": "Samson",
           "last_name": "McSwan",
           "email": "smcswan8@blogtalkradio.com",
           "password": "jW3yXu9Gne9tpeCUPGwG50Hx5K6MYT17afgqLHJXq",
           "adress": "Apt 201",
           "phone_number": "309-120-1043",
           "department_id": 2
       }
   }
     #swagger.requestBody={
    "required": true,
    "content": {
      "application/json": {
        "schema": {
          $ref: '#/components/schemas/professorBody'
          }
        }
      }
    }
  }
   #swagger.responses[200] = {
       "description": "Professor updated successfully",
       "content": {
       "application/json": {
         "schema": {
           $ref: '#/components/schemas/professorDetails'
         }
       }
     }
   }
   #swagger.responses[400] = {
       "description": "Invalid request sent",
       "schema": {
           "message":[
            "first_name is required",
            "last_name is required",
            "email is required",
            "password is required",
            "adress is required",
            "phone_number is required",
            "major_id is required",
            "Item has to be unique"
        ]}
   }
   #swagger.responses[404] = {
       "description": "Invalid request sent",
       "schema": {
         "message": "Item does not exist"
       }
   }
   */ validateId, validateProfessor, callbackErrorHandler(updateProfessor));
router.delete('/:id',
/* #swagger.tags = ["Professor"]
    #swagger.responses[204] = {
        "description": "Professor deleted successfully",
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
*/ validateId, callbackErrorHandler(deleteProfessor));

module.exports = router;
