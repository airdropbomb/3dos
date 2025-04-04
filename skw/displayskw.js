const chalk = require('chalk');

const welcomeskw = chalk.hex('#00CED1')(`
 █████╗ ██████╗ ██████╗     ███╗   ██╗ ██████╗ ██████╗ ███████╗
██╔══██╗██╔══██╗██╔══██╗    ████╗  ██║██╔═══██╗██╔══██╗██╔════╝
███████║██║  ██║██████╔╝    ██╔██╗ ██║██║   ██║██║  ██║█████╗  
██╔══██║██║  ██║██╔══██╗    ██║╚██╗██║██║   ██║██║  ██║██╔══╝  
██║  ██║██████╔╝██████╔╝    ██║ ╚████║╚██████╔╝██████╔╝███████╗
╚═╝  ╚═╝╚═════╝ ╚═════╝     ╚═╝  ╚═══╝ ╚═════╝ ╚═════╝ ╚══════╝
`);

function displayskw() {
  console.log(welcomeskw);
  console.log(chalk.hex('#00CED1')(" ╔══════════════════════════════════════════════════════════════╗"));
  console.log(chalk.hex('#00CED1')(" ║ ≣  3DOS Autobot by ADB Node                                  ║"));
  console.log(chalk.hex('#00CED1')(" ║══════════════════════════════════════════════════════════════║"));
  console.log(chalk.hex('#00CED1')(" ║ ➤   Auto claim Daily                                        ║"));
  console.log(chalk.hex('#00CED1')(" ║ ➤   Auto Ping                                               ║"));
  console.log(chalk.hex('#00CED1')(" ║ ➤   Multiple                                                ║"));
  console.log(chalk.hex('#00CED1')(" ║ ➤   Definitely Eligible                                     ║"));
  console.log(chalk.hex('#00CED1')(" ╚══════════════════════════════════════════════════════════════╝"));
  console.log(chalk.hex('#00CED1')("   ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░"));
}

module.exports = { displayskw };
