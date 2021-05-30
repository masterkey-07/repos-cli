#!/usr/bin/env node

const program = require("commander");
const config = require("config");
const {
  getRepositories,
  openRepository,
  openRepositoryFiles,
} = require("./functions");
const os = require("os");
const { openReposSite } = require("./functions/terminal");

const openRepos = (func, repo) => {
  const repos = getRepositories(config.get("reposPath"));
  let repoPath;
  try {
    if (isNaN(repo)) repoPath = repos.find((r) => r.name.includes(repo)).path;
    else repoPath = repos[parseInt(repo)].path;
    func(repoPath);
  } catch (error) {
    throw error;
  }
};

program.version("1.0.0").description("Repositorie Management System");

program
  .command("list")
  .alias("ls")
  .description("List all the Projects")
  .action(() => {
    const repos = getRepositories(config.get("reposPath"));
    repos.forEach((repo, index) => {
      console.info(`${index} - ${repo.name}`);
    });
  });

program
  .command("open <repo>")
  .alias("op")
  .description("Open a Project with VSCode")
  .action((repo) => {
    try {
      openRepos(openRepository, repo);
      console.info("Project Opened with VScode");
    } catch (error) {
      console.info("Project Not Found");
    }
  });

program
  .command("open-file <repo>")
  .alias("opf")
  .description("Open a Project with File Explorer")
  .action((repo) => {
    try {
      openRepos(openRepositoryFiles, repo);
      console.info("Project Opened with File Explorer");
    } catch (error) {
      console.info("Project Not Found");
    }
  });

program
  .command("open-web")
  .alias("opw")
  .description("Open the server and the ReposSite")
  .action(() => {
    try {
      openReposSite();
      console.info("ReposSite Open");
    } catch (error) {
      console.error(error);
    }
  });

program.parse(process.argv);
