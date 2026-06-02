const cache = require("../cache/cache");
const axios = require("axios");

const getGithubUser = async (req, res) => {
  try {
    const username = req.params.username;

    if (cache.has(username)) {

  const cachedData = cache.get(username);

  if (
    Date.now() - cachedData.timestamp <
    60000
  ) {

    console.log("Serving from cache");

    return res.json(cachedData.data);
  }
}

    const userResponse = await axios.get(
      `https://api.github.com/users/${username}`
    );

    const repoResponse = await axios.get(
      `https://api.github.com/users/${username}/repos`
    );

    const responseData = {
  profile: userResponse.data,
  repos: repoResponse.data
};

cache.set(username, {
  data: responseData,
  timestamp: Date.now()
});

res.json(responseData);

  } catch (error) {

    if (error.response?.status === 404) {
      return res.status(404).json({
        message: "User Not Found"
      });
    }

    res.status(500).json({
      message: "Something Went Wrong"
    });
  }
};

module.exports = {
  getGithubUser
};