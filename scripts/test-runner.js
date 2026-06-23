const { spawn } = require('child_process');
const path = require('path');

//Get environment variables
const testType = (process.env.TYPE || 'smoke').toLowerCase().trim();
const testEnv = (process.env.ENV || 'staging').toLowerCase().trim();

//Validate test type
const validTestTypes = ['smoke', 'regression'];
if (!validTestTypes.includes(testType)) {
  console.error(`Invalid test type: ${testType}. Valid options are: ${validTestTypes.join(', ')}`);
  process.exit(1);
}

//Validate test environment
const validTestEnvs = ['dev', 'staging', 'production'];
if (!validTestEnvs.includes(testEnv)) {
  console.error(`Invalid test environment: ${testEnv}. Valid options are: ${validTestEnvs.join(', ')}`);
  process.exit(1);
}

//Build Playwright test command
let playwrightArgs = ['test'];

// Add grep filter based on test type
if (testType === 'smoke') {
  playwrightArgs.push('--grep', '@smoke');
} else if (testType === 'regression') {
  playwrightArgs.push('--grep', '@regression');
}

console.log(`\n Running tests:`);
console.log(`  Environment: ${testEnv}`);
console.log(`  Test Type: ${testType}`);
console.log(`  Command: npx playwright ${playwrightArgs.join(' ')}\n`);

//Execute PLaywright
const playwright = spawn ('npx', ['playwright', ...playwrightArgs], { 
    stdio: 'inherit',
    shell: true,
    env:{
        ...process.env,
        ENV: testEnv,
        TYPE: testType
    }
});

// Handle process exit
playwright.on('close', (code) => {
    process.exit(code);
});

playwright.on('error', (error) => {
    console.error(`Error executing Playwright: ${error.message}`);
    process.exit(1);
});