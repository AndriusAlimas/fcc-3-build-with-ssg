const axios = require("axios");
require('dotenv').config();
// Want to use async/await? Add the `async` keyword to your outer function/method.
module.exports = async function () {
    try {
      const response = await axios.get(`http://newsapi.org/v2/everything?domains=bbc.co.uk&apiKey=${process.env.API_KEY}&pageSize=5`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }