#!/usr/bin/env node
/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { execSync } =  require('child_process');

const runCommand = (command) => {
  try {
    execSync(`${command}`, { stdio: 'inherit' });
  } catch (error) {
    console.log('Failed to execute ', error);
    return false;
  }
  return true;
};

const repoName = process.argv[2];
const gitCheckOutCommand = `git clone --depth 1 https://github.com/Puskar-Roy/create-expresss-ts.git ${repoName}`;
const installDepsCommands = `cd ${repoName} && npm install`;

console.log(`Cloning The Repository with name ${repoName}`);

const checkOut = runCommand(gitCheckOutCommand);

if (!checkOut) process.exit(-1);

console.log(`Installing dependencies for ${repoName}....`);

const installedDeps = runCommand(installDepsCommands);

if (!installedDeps) process.exit(-1);

console.log('You Are Ready!');
console.log(`cd ${repoName} && npm start`);
