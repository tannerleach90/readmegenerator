const axios = require("axios")
const api = {
  getUser(username) {
    const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;
    return axios
      .get(queryUrl)
  }
};

module.exports = api;
