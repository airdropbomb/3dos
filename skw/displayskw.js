const chalk = require('chalk');
const hexColor = chalk.hex('#00CED1'); // အရောင်ကို အရင်သတ်မှတ်
const welcome = hexColor(`
 █████╗ ██████╗ ██████╗     ███╗   ██╗ ██████╗ ██████╗ ███████╗
██╔══██╗██╔══██╗██╔══██╗    ████╗  ██║██╔═══██╗██╔══██╗██╔════╝
███████║██║  ██║██████╔╝    ██╔██╗ ██║██║   ██║██║  ██║█████╗  
██╔══██║██║  ██║██╔══██╗    ██║╚██╗██║██║   ██║██║  ██║██╔══╝  
██║  ██║██████╔╝██████╔╝    ██║ ╚████║╚██████╔╝██████╔╝███████╗
╚═╝  ╚═╝╚═════╝ ╚═════╝     ╚═╝  ╚═══╝ ╚═════╝ ╚═════╝ ╚══════╝
`);

function display() {
  console.log(welcome);
  console.log(hexColor(" ╔══════════════════════════════════════════════════════════════╗"));
  console.log(hexColor(" ║ ≣  3DOS Autobot by ADBNODE                                   ║"));
  console.log(hexColor(" ║══════════════════════════════════════════════════════════════║"));
  console.log(hexColor(" ║ ➤   Auto claim Daily                                        ║"));
  console.log(hexColor(" ║ ➤   Auto Ping                                               ║"));
  console.log(hexColor(" ║ ➤   MultiAccount                                            ║"));
  console.log(hexColor(" ╚══════════════════════════════════════════════════════════════╝"));
  console.log(hexColor("   ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░"));
}

module.exports = { displayskw };
