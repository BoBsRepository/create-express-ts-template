#!/usr/bin/env node
/* eslint-disable prettier/prettier */
/* eslint-disable no-useless-escape */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */

const { execSync } = require('child_process');
const readline = require('readline');
const { blue, green, cyan, yellow, red } = require('colorette');

const runCommand = (command) => {
  try {
    execSync(`${command}`, { stdio: 'inherit' });
  } catch (error) {
    console.log(red('❌ Failed to execute:'), yellow(command));
    return false;
  }
  return true;
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const repoName = process.argv[2];

const gitCheckOutCommand = `git clone https://github.com/Puskar-Roy/create-expresss-ts.git ${repoName}`;
const installDepsCommands = `cd ${repoName} && npm install`;

console.log(blue(`🚀 Cloning the repository with name ${repoName}`));
const checkOut = runCommand(gitCheckOutCommand);

if (!checkOut) process.exit(-1);

console.log(green(`🛠 Installing dependencies for ${repoName}...`));
const installedDeps = runCommand(installDepsCommands);

if (!installedDeps) process.exit(-1);

// Prompt user for the new repository link
rl.question(
  cyan('🌟 Do you want to push to a new GitHub repository? (yes/no): '),
  (answer) => {
    if (answer.toLowerCase() === 'yes') {
      rl.question(cyan('🚚 Enter the new repository link: '), (newRepoLink) => {
        const removeOriginCommand = `cd ${repoName} && git remote remove origin`;
        const changeOriginCommand = `cd ${repoName} && git remote add origin ${newRepoLink}`;
        const pushToNewRepoCommand = `cd ${repoName} && git push -u origin main`; // Adjust the branch name if needed
        const removeOrigin = runCommand(removeOriginCommand);

        if (!removeOrigin) process.exit(-1);

        console.log(cyan(`🔄 Changing the remote URL to ${newRepoLink}...`));
        const changeOrigin = runCommand(changeOriginCommand);

        if (!changeOrigin) process.exit(-1);

        console.log(cyan(`🚀 Pushing changes to the new repository...`));
        const pushToNewRepo = runCommand(pushToNewRepoCommand);

        if (!pushToNewRepo) process.exit(-1);

        console.log(``);
        console.log(green('🎉 You are ready!'));
        console.log(yellow(`💻 cd ${repoName} && npm start`));

        rl.close();
      });
    } else {
      console.log(yellow('👍 You chose not to push to a new repository.\n'));
      // eslint-disable-next-line prettier/prettier
      console.log(
        cyan(`
                                                                                                  
                                                                                          
                                                       %+:                                
                                                       @@@-                               
                                                       @@@-                               
                                                       @@@-                               
                     :+#@#=.      .=*%#+:        :+%@*-@@@-   .=#@#+:                     
                  -*@@@@@@@@@*:.+%@@@@@@@@*-  =#@@@@@@@@@@-:*@@@@@@@@@*:                  
                  %@@#-  .=@@@+=@@@@@@@@@@@%  %@@#:  .=@@@-+@@@=...-%@@*                  
                  %@@+     %@@+=@@@@@@@@@@@%  %@@=     @@@-+@@# -%= *#=                   
                  %@@+     %@@+=@@@@@@@@@@@%  %@@%+::=#@@@-+@@@*=.                        
                  %%*:     -*@+ -*@@@@@@@#=.  .=#@@@@@@%+-  -*@@@@%+:                     
                                   .=*+:          :+*-.        .=*+:                      
                                                                                          
      `)
      );

      console.log(green(`  💻 Happy Coading - Puskar Roy☠️`));
      console.log(green('  🎉 You are ready!\n'));
      console.log(cyan(`  ⌨️  cd ${repoName} && npm run dev`));

      rl.close();
    }
  }
);
