const { exec } = require("child_process");

const openRepository = (path) => {
  try {
    exec(`code "${path}"`);
  } catch (error) {
    throw error;
  }
};

const openRepositoryFiles = (path) => {
  try {
    exec(`explorer "${path}"`);
  } catch (error) {
    throw error;
  }
};

const openReposSite = () => {
  try {
    exec(
      `npm start --prefix "C:\\Users\\User\\source\\repos\\Personal\\Web\\Dinamic Sites\\ReposSite"`
    );
    exec(`chrome http://localhost:5000/`);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  openRepository: openRepository,
  openReposSite: openReposSite,
  openRepositoryFiles: openRepositoryFiles,
};
