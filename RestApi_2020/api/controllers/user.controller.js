const User = require("../models").User;

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Log = require("../utils/logger").log;
const dbConn = require("../sqlConnection");


const express = require("express");
const app = express();
const amqp = require("amqplib");
const bp = require("body-parser");
var channel, connection;
connect();


const Usersession = "usersession";


async function connect() {
  try {
      const amqpServer = process.env.RABBITMQ_PORT;
      connection = await amqp.connect(amqpServer);
      channel = await connection.createChannel();
      await channel.assertQueue(Usersession);
         channel.consume(Usersession, data => {
          let obj_user_data = JSON.parse(Buffer.from(data.content));
          UserRegister(obj_user_data);
          channel.ack(data);
      });
  } catch (ex) {
      console.error(ex);
  }
}

/**
 * Date: 14.12.2021
 * Author: A.Balaji
 * Description: Create a new user rabbitmq session data
 */



 const UserRegister = async obj_user_data => {
  try{
    let sqlQuery = "";
   const salt = await bcrypt.genSalt(10);
   const hashPassword = await bcrypt.hash(obj_user_data.phone_number, salt);
    let user_data = {
      email: obj_user_data.email,
      name: obj_user_data.name,
      password: hashPassword,
      phone_number: obj_user_data.phone_number,
      address: obj_user_data.address,
      created_at: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''),
    };
    let stringfy_user_data = JSON.stringify(user_data);
    const user_creation = await new Promise(function (resolve, reject) {
      sqlQuery =
        "INSERT INTO users (user_details) VALUES (?)";
      dbConn.query(sqlQuery,[stringfy_user_data],
        (err, result) => {
          if (err) {
            let error_meg = { status: 400,message: "Something Went Wrong."};
            return error_meg;
          }
          resolve(result.insertId);
        }
      );
    });
    let success_meg = { status: 200, message: true,Data: user_creation};
    console.log(success_meg);
    return success_meg;
  }
  catch (error) {
    Log.error(
      "{ controller: user, method: UserRegister, type: Exception, status: 400, error: " +
        error +
        " }"
    );
    let error_meg = { status: 400,message: error};
     return error_meg;
  }

}


/**
 * Date: 14.12.2021
 * Author: A.Balaji
 * Description: Create a new user
 */

const createUser = async (request, response) => {
  try {
    console.log(user_data);
  } catch (error) {
    Log.error(
      "{ controller: user, method: createUser, type: Exception, status: 400, error: " +
        error +
        " }"
    );
    response.status(400).send({ Status: 400, message: error });
  }
};












module.exports = {
   createUser
};
