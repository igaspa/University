// eslint-disable-next-line import/no-extraneous-dependencies
const swaggerAutogen = require('swagger-autogen')({ openapi: '3.0.0' });

const doc = {
  info: {
    title: 'University Application',
    description: 'Description'
  },
  host: 'localhost:4000',
  schemes: ['http'],
  components: {
    '@schemas': {
      studentBody: {
        type: 'object',
        properties: {
          first_name: { type: 'string' },
          last_name: { type: 'string' },
          email: { type: 'string' },
          password: { type: 'string' },
          adress: { type: 'string' },
          phone_number: { type: 'string' },
          major_id: {
            type: 'integer',
            format: 'int64'
          }
        }
      },
      studentDetails: {
        type: 'object',
        properties: {
          role: { type: 'string' },
          id: { type: 'integer' },
          first_name: { type: 'string' },
          last_name: { type: 'string' },
          email: { type: 'string' },
          password: { type: 'string' },
          adress: { type: 'string' },
          phone_number: { type: 'string' },
          major_id: { type: 'integer' },
          major: {
            type: 'object',
            properties:
            { name: { type: 'string' } }
          }
        }
      },
      studentList: {
        type: 'object',
        properties: {
          details: {
            type: 'array',
            items: { $ref: '#/components/schemas/studentDetails' }
          }
        }
      },
      errorDetails: {
        type: 'object',
        properties: {
          message: { type: 'string' }
        }
      },
      errorList: {
        type: 'object',
        properties: {
          details: {
            type: 'array',
            items: { $ref: '#/components/schemas/studentErrorDetails' }
          }
        }
      },
      professorBody: {
        type: 'object',
        properties: {
          first_name: { type: 'string' },
          last_name: { type: 'string' },
          email: { type: 'string' },
          password: { type: 'string' },
          adress: { type: 'string' },
          phone_number: { type: 'string' },
          department_id: {
            type: 'integer',
            format: 'int64'
          }
        }
      },
      professorDetails: {
        type: 'object',
        properties: {
          role: { type: 'string' },
          id: { type: 'integer' },
          first_name: { type: 'string' },
          last_name: { type: 'string' },
          email: { type: 'string' },
          password: { type: 'string' },
          adress: { type: 'string' },
          phone_number: { type: 'string' },
          department_id: { type: 'integer' },
          department: {
            type: 'object',
            properties:
            { name: { type: 'string' } }
          }
        }
      },
      professorList: {
        type: 'object',
        properties: {
          details: {
            type: 'array',
            items: { $ref: '#/components/schemas/professorDetails' }
          }
        }
      },
      majorBody: {
        type: 'object',
        properties: {
          name: { type: 'string' }
        }
      },
      majorDetails: {
        type: 'object',
        properties: {
          id: { type: 'integer' },
          name: { type: 'string' },
          student: {
            type: 'object',
            properties:
            {
              first_name: { type: 'string' },
              last_name: { type: 'string' }
            }
          }
        }
      },
      majorList: {
        type: 'object',
        properties: {
          details: {
            type: 'array',
            items: { $ref: '#/components/schemas/majorDetails' }
          }
        }
      },
      departmentBody: {
        type: 'object',
        properties: {
          name: { type: 'string' },
          major_id: { type: 'number' }
        }
      },
      departmentDetails: {
        type: 'object',
        properties: {
          id: { type: 'integer' },
          name: { type: 'string' },
          major_id: { type: 'integer' }
        }
      },
      departmentList: {
        type: 'object',
        properties: {
          details: {
            type: 'array',
            items: { $ref: '#/components/schemas/departmentDetails' }
          }
        }
      },
      courseBody: {
        type: 'object',
        properties: {
          name: { type: 'string' },
          credit_hours: { type: 'integer' },
          major_id: { type: 'number' }
        }
      },
      courseDetails: {
        type: 'object',
        properties: {
          id: { type: 'integer' },
          name: { type: 'string' },
          credit_hours: { type: 'integer' },
          major_id: { type: 'integer' }
        }
      },
      courseList: {
        type: 'object',
        properties: {
          details: {
            type: 'array',
            items: { $ref: '#/components/schemas/courseDetails' }
          }
        }
      },
      examBody: {
        type: 'object',
        properties: {
          name: { type: 'string' },
          date: { type: 'string' },
          course_id: { type: 'integer' }
        }
      },
      examDetails: {
        type: 'object',
        properties: {
          id: { type: 'integer' },
          name: { type: 'string' },
          date: { type: 'string' },
          course_id: { type: 'integer' }
        }
      },
      examList: {
        type: 'object',
        properties: {
          details: {
            type: 'array',
            items: { $ref: '#/components/schemas/examDetails' }
          }
        }
      },
      loginBody: {
        type: 'object',
        properties: {
          email: { type: 'string' },
          password: { type: 'string' }
        }
      },
      lecturerBody: {
        type: 'object',
        properties: {
          professor_id: { type: 'integer' },
          course_id: { type: 'integer' }
        }
      },
      lecturerDetails: {
        type: 'object',
        properties: {
          professor_id: { type: 'integer' },
          course_id: { type: 'integer' },
          professor: {
            type: 'object',
            properties:
            {
              first_name: { type: 'string' },
              last_name: { type: 'string' }
            }
          },
          course: {
            type: 'object',
            properties:
            {
              name: { type: 'string' }
            }
          }
        }
      },
      lecturerList: {
        type: 'object',
        properties: {
          details: {
            type: 'array',
            items: { $ref: '#/components/schemas/lecturerDetails' }
          }
        }
      },
      enrollmentBody: {
        type: 'object',
        properties: {
          student_id: { type: 'integer' },
          course_id: { type: 'integer' }
        }
      },
      enrollmentDetails: {
        type: 'object',
        properties: {
          student_id: { type: 'integer' },
          course_id: { type: 'integer' },
          student: {
            type: 'object',
            properties:
            {
              first_name: { type: 'string' },
              last_name: { type: 'string' }
            }
          },
          course: {
            type: 'object',
            properties:
            {
              name: { type: 'string' }
            }
          }
        }
      },
      enrollmentList: {
        type: 'object',
        properties: {
          details: {
            type: 'array',
            items: { $ref: '#/components/schemas/enrollmentDetails' }
          }
        }
      },
      resultBody: {
        type: 'object',
        properties: {
          grade: { type: 'integer' },
          student_id: { type: 'integer' },
          exam_id: { type: 'integer' }
        }
      },
      resultDetails: {
        type: 'object',
        properties: {
          grade: { type: 'integer' },
          student_id: { type: 'integer' },
          exam_id: { type: 'integer' },
          student: {
            type: 'object',
            properties:
            {
              first_name: { type: 'string' },
              last_name: { type: 'string' }
            }
          },
          exam: {
            type: 'object',
            properties:
            {
              name: { type: 'string' }
            }
          }
        }
      },
      resultList: {
        type: 'object',
        properties: {
          details: {
            type: 'array',
            items: { $ref: '#/components/schemas/resultDetails' }
          }
        }
      }
    }
  }
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['app.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);
