/**
 * Date: 08-04-2020
 * Author: Sarathkumar
 * Description: API not found
 */
const notFound = (app) => {
  app.use((request, response, next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
  });

  app.use((error, request, response, next) => {
    response
      .status(error.status || 500)
      .send({ status: error.status || 500, message: error.message });
  });
};

module.exports = notFound;
