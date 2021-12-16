const userController = require("../controllers/user.controller");
const Authorized = require("../middlewares/check.auth");


const userRoutes = (app) => {
  /**
   * Date: 15.12.2021
   * Author: A.Balaji
   * Description: Create a new user
   */
  /**
   * @swagger
   * definitions:
   *   User:
   *     properties:
   *       email:
   *         type: string
   *       name:
   *         type: string
   *       password:
   *         type: string
   *       usertype:
   *          type: string
   *       phone_number:
   *          type: string
   *       location:
   *          type: string   
   *       created_by:
   *          type: string    
   */
  /**
   * @swagger
   * /api/user/create:
   *   post:
   *     tags:
   *       - User
   *     summary: Create a new user
   *     description: Create a new user
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: user
   *         description: User object
   *         in: body
   *         required: true
   *         schema:
   *           $ref: '#/definitions/User'
   *     responses:
   *       201:
   *         description: Successfully created
   *       400:
   *         description: Bad request
   *       401:
   *         description: Unauthorized access
   *       404:
   *         description: API not found
   *       500:
   *         description: Internal server error
   */
  app.post("/api/user/create", userController.createUser);

  
};

module.exports = userRoutes;
