const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'My API',
    description: 'Description',
  },
  host: 'cse341-personal-project2.onrender.com',
  schemes: ['https'],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

/* NOTE: if you use the express Router, you must pass in the 
   'endpointsFiles' only the root file where the route starts,
   such as: index.js, app.js, routes.js, ... */

// Generate swagger.json
//swaggerAutogen(outputFile, endpointsFiles, doc);

// Generate Swagger.son on Startup
// ...
 swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
     require('./server.js'); // Your project's root file
    });
