const swaggerJsDoc = require('swagger-jsdoc');

const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'API Documentation',
            version: '1.0.0',
            description: 'Description of your API',
        },
        servers: [
            {
                url: 'http://localhost:3003', // Replace with your API base URL
            },
        ],
    },
    apis: ['./server.js'], // Path to your API route files with Swagger comments
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
module.exports = swaggerDocs;