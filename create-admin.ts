// a cli utility to add a new admin user
// DEPRECATED

import { UserRole, addUser } from "./src/db/_user";
import type { ReturnMessage } from "./src/db/_user";

import * as readline from 'readline';
import { exit } from 'process';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/**
 * Creates a new question in the cli.
 * @param question The question put into the cli.
 * @returns The answer the user types in cli.
 */
async function getUserInput(question: String) {
  return new Promise(res => {
    rl.question(`${question} `, (answer: String) => {
      res(answer);
    });
  });
}

async function clearConsole(delay: number): Promise<void> {
  return new Promise((res) => {
    setTimeout(() => {console.clear();res()}, delay);
  })
}

async function main() {
  // rl.write('Loading....');
  // wait for mongo to connect
  await clearConsole(100);
  rl.write(`This tool is to add in the first administrator user. If you already are an administrator and want to add more users, goto the dashboard and click "Add User".
Exit this utility at any time by pressing Ctrl + C twice.\n\n`);
  const name: String = String(await getUserInput("What's the name of the new administrative account?"));
  const email: String = String(await getUserInput("What's the email of the new account?"));
  const code = await addUser(name, email, UserRole.Admin);
  // await console.clear();
  if (code.error) {
    await rl.write(`User could not be added because: ${code.msg}\n`);
  } else {
    await rl.write(`${code.msg}\n`);
  }
  await rl.close();
  await exit();
}

main();
