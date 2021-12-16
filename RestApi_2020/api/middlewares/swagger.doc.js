const swaggerUi = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");

/**
 * Date: 08-04-2020
 * Author: Sarathkumar
 * Description: Swagger API document
 */
const swaggerDocs = (app) => {
  const swaggerOptions = {
    swaggerDefinition: {
      // openapi: "3.0.1",
      info: {
        title: "Node Rest API Documentation",
        version: "1.0.0",
        description: "Node rest API document generated using swagger",
        
	  },
	  securityDefinitions: {
      	bearerAuth: {
      		type: "apiKey",
      		name: "Authorization",
      		in: "header",
      	}
      },
    //   components: {
    //     securitySchemes: {
    //       UserSecurity: {
    //         type: "http",
    //         scheme: "basic",
    //       },
    //       bearerAuth: {
    //         type: "http",
    //         scheme: "bearer",
    //         bearerFormat: "JWT",
    //       },
    //     },
    //   },
      // securityDefinitions: {
      // 	bearerAuth: {
      // 		type: "apiKey",
      // 		name: "Authorization",
      // 		in: "header",
      // 	}
      // },
      //   components: {
      //     securitySchemes: {
      //       bearerAuth: {
      //         type: "http",
      //         scheme: "bearer",
      //         bearerFormat: "JWT",
      //       },
      //     },
      //   },
    },
    apis: ["./api/routes/*.js"],
  };
  const swaggerDocs = swaggerJsDoc(swaggerOptions);

  const swaggerUiOptions = {
    customSiteTitle: "TTIPL Node Rest API",
    customfavIcon:"https://talentakeaways.com/favicon.png",
    customCss: '.topbar-wrapper img { content:url(https://talentakeaways.com/static/media/logos.86b60b5f.png) } .swagger-ui .topbar { background-color: #dddddd; }'
  };

  app.use(
    "/api/docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocs, swaggerUiOptions)
  );
};

module.exports = swaggerDocs;
