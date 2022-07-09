const fs = require('fs/promises');
const { spawn } = require('child_process');

async function main() {
  const package = JSON.parse((await fs.readFile('package.json')).toString());
  if (!package.peerDependencies) return;

  const args = Object.keys(package.peerDependencies).map((key) => `${key}@${package.peerDependencies[key]}`);

  if (!args.length) return;

  args.unshift('add', '--peer', '--pure-lockfile');

  try {
    const yarn = process.platform === 'win32' ? 'yarn.cmd' : 'yarn';
    await execute(yarn, args);
  } catch (error) {
    console.error(error.message || error);
    process.exit(1);
  }
}

function execute(processName, args, options) {
  console.info(`${processName} ${args.join(' ')}`);
  return new Promise((res, rej) => {
    const child = spawn(processName, args, options);

    child.on('error', (error) => {
      rej(new Error(`Could not run ${processName} ${args.join(' ')}: ${error}.`));
    });

    child.stdout.on('data', (data) => {
      process.stdout.write(data);
    });

    child.stderr.on('data', (data) => {
      process.stderr.write(data);
    });

    child.on('close', (code) => {
      if (code === 0) {
        res();
      } else {
        rej(new Error(`process ${processName} ${args.join(' ')} exited with code ${code}.`));
      }
    });
  });
}

main();
