const jwt = require("jsonwebtoken");
const Log = require("../utils/logger").log;

/**
 * Date: 08-04-2020
 * Author: Sarathkumar
 * Description: Service token authorization
 */
module.exports = (request, response, next) => {
  try {
    const token = request.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_TOKEN_SECRET_KEY);
    request.userData = decoded;
    //console.log(decoded);
    next();
  } catch (error) {
   /// response.send({ status: 401, message: "Unauthorized token" });
    Log.error(
      "{ middleware: Authorization, type: Exception, status: 401, error: " +
        error +
        " }"
    );
   response.status(200).send({ Status: 401, Message: "Unauthorized token" });

    //response.send({ status: 401, message: "Unauthorized token" });
  }
};
