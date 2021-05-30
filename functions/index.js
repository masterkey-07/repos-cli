const { getRepositories } = require("./repos");
const { openRepository, openRepositoryFiles } = require("./terminal");

module.exports = {
  getRepositories: getRepositories,
  openRepository: openRepository,
  openRepositoryFiles: openRepositoryFiles,
};
