const chalk = require('chalk');

// Chalk 5.x မှာ hex color ကို သုံးဖို့ အရင် hex ကို သတ်မှတ်တယ်
const hexColor = (text) => chalk.hex('#00CED1')(text);

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
