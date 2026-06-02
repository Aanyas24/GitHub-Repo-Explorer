const express = require("express");

const router = express.Router();

const {
  getGithubUser
} = require("../controllers/githubController");

router.get("/:username", getGithubUser);

module.exports = router;